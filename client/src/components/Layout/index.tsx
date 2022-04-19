import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import { refreshToken } from "../../redux/actions/authAction";
import { RootStore } from "../../utils/TypeScript";
import MenuBar from "../MenuBar";
import Sidebar from "../Sidebar";
import { Container, Wrapper } from "./styles";

const Layout = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootStore) => state);

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={!auth.token && <Login />} />
      </Routes>
      <Wrapper>
        {auth.token && <MenuBar />}
        {auth.token && (
          <div className="route_main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/*" element={<Profile />} />
            </Routes>
          </div>
        )}
        {auth.token && <Sidebar />}
      </Wrapper>
    </Container>
  );
};

export default Layout;
