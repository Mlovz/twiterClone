import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import Avatar from "../Avatar";
import Button from "../Button";
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  EploreIcon,
  NotifyIcon,
  MessageIcon,
  BookmarkIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
  AddIcon,
  BotSide,
  ProfileData,
  ExitIcon,
} from "./style";

export const navLinks = [
  {
    display: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    display: "Explore",
    icon: <EploreIcon />,
    to: "/explore",
  },
  {
    display: "Notification",
    icon: <NotifyIcon />,
    to: "/notify",
  },
  {
    display: "Messages",
    icon: <MessageIcon />,
    to: "/message",
  },
  {
    display: "Bookmarks",
    icon: <BookmarkIcon />,
    to: "/bookmark",
  },
  {
    display: "Lists",
    icon: <ListIcon />,
    to: "/list",
  },
  {
    display: "Profile",
    icon: <ProfileIcon />,
    to: "/profile",
  },
  {
    display: "More",
    icon: <MoreIcon />,
    to: "/more",
  },
];

const MenuBar = () => {
  const [openPop, setOpenPop] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <TopSide>
        <Logo />

        {navLinks.map((link, index) => (
          <MenuButton key={index} to={link.to}>
            {link.icon}
            <span>{link.display}</span>
          </MenuButton>
        ))}

        <Button outlined={false} bg="#000" color="#fff">
          <AddIcon />
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide onClick={() => setOpenPop(!openPop)}>
        <Avatar src="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />

        <ProfileData>
          <strong>Yakhya</strong>
          <span>@yakhya</span>
        </ProfileData>

        <ExitIcon onClick={handleLogout} />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
