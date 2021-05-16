import React, { useState } from "react";
import styled from "styled-components";
import { signIn } from "next-auth/client";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <button className="form-sign-in">Sign in</button>
        <div className="sign-link-cover">
          Not yet register?&nbsp;
          <span className="sign-link">Sign up</span>
        </div>
        <div className="githubBtn" onClick={() => signIn()}>
          <img src={`/images/github.png`} alt="" className="githubIcon" />
          Git Hub
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
    background: #8b0000;
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    &:active {
      transform: translateY(20px);
    }
  }

  .sign-link {
    text-decoration: underline;
  }

  .githubBtn {
    border: 1px solid #333;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    margin-top: 20px;
    background: #fff;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    &:active {
      transform: translateY(20px);
    }
  }
  .githubIcon {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
`;

export default Login;
