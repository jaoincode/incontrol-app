import { useEffect } from "react";

import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../../config/Firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const signIn = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <section className="appContainer fadeIn">
      <Title>Login</Title>
      <br />
      <Paragraph>Login on your account to be inControl</Paragraph>
      <br />
      <button className="login-with-google-btn" onClick={signIn}>
        Sign in With Google
      </button>
      <div style={{ maxWidth: "600px" }}></div>
    </section>
  );
};

export default Login;
