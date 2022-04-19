import React, { FormEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/actions/authAction";
import { InputChange, RootStore } from "../../../utils/TypeScript";
import Spinner from "../../Spinner";
import {
  Container,
  AuthHeader,
  CloseIcon,
  TwitterIcon,
  AuthBody,
  AuthForm,
  AuthInput,
  AuthButton,
} from "./style";

interface IProps {
  onClose: () => void;
}

const LoginModal: React.FC<IProps> = ({ onClose }) => {
  const initialState = { account: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const handleChange = (e: InputChange) => {
    const { name, value } = e.currentTarget;
    setUserData({ ...userData, [name]: value });
  };
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootStore) => state);
  const history = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(login(userData, history));
  };

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <AuthHeader>
        <CloseIcon onClick={onClose} />
        <TwitterIcon />
        {auth.loading && <Spinner />}
      </AuthHeader>
      <AuthBody>
        <h1>Вход в Твиттер</h1>
        <AuthForm onSubmit={handleLogin}>
          <AuthInput
            type="text"
            value={userData.account}
            name="account"
            placeholder="введите почту"
            onChange={handleChange}
          />
          <AuthInput
            type="password"
            name="password"
            value={userData.password}
            placeholder="введите пароль"
            onChange={handleChange}
          />
          <AuthButton disabled={auth.loading}>Далее</AuthButton>
          <AuthButton>Забыли пароль ?</AuthButton>
        </AuthForm>
      </AuthBody>
    </Container>
  );
};

export default LoginModal;
