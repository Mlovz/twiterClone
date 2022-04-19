import React from "react";
import ProfilePage from "../../components/Profile/ProfilePage";
import TabsLinks from "../../components/Profile/TabsLinks";
import TabsRoute from "../../components/Profile/TabsRoute";
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from "./styles";

const Profile = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Mestoev Yakhya</strong>
          <span>50 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <TabsLinks />
      <TabsRoute />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Profile;
