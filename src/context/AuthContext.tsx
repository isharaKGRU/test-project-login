import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import firebase from "firebase";

// Types -->
type TProps = {
  children: ReactNode;
};

type TUser = { uid: string | null; email: string | null };

type TAuthContext = {
  user: TUser;
  log_in: (email: string, password: string) => void;
  log_out: () => void;
  sign_up: (email: string, password: string) => void;
};

// Auth Context Default values -->
const authContextDefaultValues: TAuthContext = {
  user: { uid: null, email: null },
  log_in: () => {},
  log_out: () => {},
  sign_up: () => {},
};

// Auth Context -->
const AuthContext = createContext<TAuthContext>(authContextDefaultValues);

// Auth hook -->
export function useAuth() {
  return useContext(AuthContext);
}

// Auth Provider -->
export function AuthProvider({ children }: TProps) {
  let auth: any;
  const [user, setUser] = useState<TUser>({ uid: null, email: null });

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyA384wefks7NkXKZ4HIS0DW3PzJ3zydSLo",
      authDomain: "fir-login-925a5.firebaseapp.com",
      projectId: "fir-login-925a5",
      storageBucket: "fir-login-925a5.appspot.com",
      messagingSenderId: "273581573478",
      appId: "1:273581573478:web:a9e16be7376abba797f4a7",
      measurementId: "G-C2EECCVSRF",
    };
    firebase.initializeApp(firebaseConfig);
    firebase.firestore();
    auth = firebase.auth();
    // eslint-disable-next-line no-console
    console.log("auth: =-->", auth);
    const unsubscribe = auth.onAuthStateChanged((userAuth: any) => {
      const tempUser = {
        uid: userAuth?.uid || null,
        email: userAuth?.email || null,
      };
      setUser(tempUser);
    });
    return unsubscribe;
  }, []);

  const log_in = (email: string, password: string) => {
    // eslint-disable-next-line no-console
    console.log("authxxxx: =-->", auth);
    if (!!auth) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((data: any) => {
          console.log(data);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };

  const log_out = () => {
    if (!!auth) {
      setUser({ uid: null, email: null });
      auth.signOut();
    }
  };

  const sign_up = (email: string, password: string) => {
    if (!!auth) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((data: any) => {
          console.log(data);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };

  const value = {
    user,
    log_in,
    log_out,
    sign_up,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
