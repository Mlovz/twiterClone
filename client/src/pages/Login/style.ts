import styled from "styled-components";
import Button from "../../components/Button";
import { Twitter } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const LoginInfo = styled.div`
  max-width: 55%;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--twitter);
  > svg {
    width: 30%;
    height: 30%;
    > path {
      color: #fff;
    }
  }
`;
export const TwiiterIcon = styled(Twitter)``;
export const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 40px;
  > svg {
    width: 40px;
    height: 40px;
    > path {
      color: var(--twitter);
    }
  }
  > h1 {
    margin-top: 40px;
    font-size: 70px;
  }
  > h3 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 40px;
  }
  > h4 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
export const AuthButton = styled(Button)`
  max-width: 350px;
  width: 100%;
`;
