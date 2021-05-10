import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { log_in, sign_up } = useAuth();
  return (
    <Container>
      <form action="" className="form">
        <div className="sign-in">Sign in to E-Meetings</div>
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ele) => {
            setEmail(ele.currentTarget.value);
          }}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ele) => {
            setPassword(ele.currentTarget.value);
          }}
        />
        <button
          className="form-sign-in"
          onClick={() => log_in(email, password)}
        >
          Sign in{" "}
        </button>
        <div className="sign-link-cover">
          Not yet register?&nbsp;
          <span className="sign-link" onClick={() => sign_up(email, password)}>
            Sign up
          </span>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #f1f1f1;

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .sign-in {
    font-size: 2rem;
  }

  .form-input {
    margin-bottom: 5px;
    border-radius: 60px;
    padding: 0.5em 1em;
    border: 1px solid #333;
    outline: none;
    &::placeholder {
      text-align: center;
    }
  }

  .form-sign-in {
    background: #fff;
    border: 1px solid #333;
    border-radius: 50px;
    padding: 0.5em 1.5em;
    margin: 1rem 0;
  }

  .sign-link {
    text-decoration: underline;
  }
`;

export default Login;
