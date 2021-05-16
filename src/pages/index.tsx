import { useSession } from "next-auth/client";
import Login from "./login";
import Home from "./home";
import Loader from "../components/loader";

const index = (): JSX.Element => {
  const [session, loading] = useSession();

  if (loading) {
    return <Loader />;
  }

  if (session) {
    return <Home />;
  }
  return (
    <>
      <Login />
    </>
  );
};

export default index;
