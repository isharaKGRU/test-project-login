import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

type TError = { message: string; where: string; to: string };
const Error = ({ message, where, to }: TError): JSX.Element => {
  const router = useRouter();
  return (
    <Container>
      {message}
      <Goto
        onClick={() => {
          router.push(to);
        }}
      >
        {where}
      </Goto>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-size: 20px;
`;

const Goto = styled.div`
  cursor: pointer;
  border: 1px solid #333;
  padding: 0.25em 1.5em;
  margin: 1em;
`;

export default Error;
