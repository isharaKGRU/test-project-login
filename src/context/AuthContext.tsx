import { createContext, useContext, ReactNode, useState } from "react";
import { auth } from "../components/firebase";
import { useRouter } from "next/router";

// Types -->
type TAuthContext = {
  user: boolean;
  log_in: (email: string, password: string) => void;
  log_out: () => void;
  sign_up: (email: string, password: string) => void;
};

type TProps = {
  children: ReactNode;
};

// Auth Context Default values -->
const authContextDefaultValues: TAuthContext = {
  user: false,
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
  const [user, setUser] = useState<boolean>(false);
  const router = useRouter();

  const log_in = (email: string, password: string) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((data: any) => {
        setUser(true);
        console.log(data);
        router.push("/");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const log_out = () => {
    setUser(false);
  };

  const sign_up = (email: string, password: string) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data: any) => {
        console.log(data);
        router.push("/");
      })
      .catch((err: any) => {
        console.log(err);
      });
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
