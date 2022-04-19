import React, { useState } from "react";
import BackDrop from "../../components/BackDrop";
import LoginModal from "../../components/Login/LoginModal";
import RegisterModal from "../../components/Login/RegisterModal";
import {
  Container,
  LoginInfo,
  TwiiterIcon,
  LoginBlock,
  AuthButton,
} from "./style";

const Login = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenRegister = () => {
    setOpenRegister(true);
  };
  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  return (
    <Container>
      <LoginInfo>
        <TwiiterIcon />
      </LoginInfo>
      <LoginBlock>
        <TwiiterIcon />

        <h1>В курсе происходящего</h1>
        <h3>Присоединяйтесь к Твиттеру прямо сейчас!</h3>

        <AuthButton
          outlined={false}
          bg="#33A1F2"
          color="#fff"
          onClick={handleOpenRegister}
        >
          Зарегистрироваться
        </AuthButton>

        <h4>Уже зарегистрированы?</h4>
        <AuthButton outlined={true} color="#33A1F2" onClick={handleOpenLogin}>
          Войти
        </AuthButton>
      </LoginBlock>

      {openLogin && (
        <BackDrop onClose={handleCloseLogin}>
          <LoginModal onClose={handleCloseLogin} />
        </BackDrop>
      )}
      {openRegister && (
        <BackDrop onClose={handleCloseRegister}>
          <RegisterModal />
        </BackDrop>
      )}
    </Container>
  );
};

export default Login;
