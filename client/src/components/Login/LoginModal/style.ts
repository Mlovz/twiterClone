import styled from "styled-components";
import { Close, Twitter } from "../../../styles/icons";
import Button from "../../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: #fff;
  border-radius: 15px;
  padding-bottom: 60px;
`;
export const AuthHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
  > div {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;
export const CloseIcon = styled(Close)`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 33px;
  height: 33px;
  padding: 3px;
  cursor: pointer;
  border-radius: 50%;
  > path {
    color: var(--outline);
  }
  &:hover {
    background: var(--gray_dark);
  }
`;
export const TwitterIcon = styled(Twitter)`
  width: 30px;
  height: 30px;
  > path {
    color: var(--twitter);
  }
`;
export const AuthBody = styled.div`
  width: 300px;
  margin-top: 30px;
  > h1 {
    font-size: 25px;
  }
`;
export const AuthForm = styled.form`
  /* border: 1px solid red; */
  margin-top: 20px;
  > input + input {
    margin-top: 20px;
  }
  > button:last-child {
    background: #fff;
    color: #000;
    border: 1px solid var(--gray);
    font-weight: normal;
  }
`;
export const AuthInput = styled.input`
  width: 100%;
  outline: none;
  color: var(--outline);
  font-size: 20px;
  background: #fff;
  border: 1px solid var(--gray);
  height: 60px;
  padding: 0 10px;
  border-radius: 5px;
`;
export const AuthButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background: #000;
  color: #fff;
  border-radius: 25px;
  padding: 8px;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #00000099;
  }
  &:disabled {
    pointer-events: none;
    background: var(--gray_dark);
    color: #00000070;
  }
`;
