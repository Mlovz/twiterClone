import React from "react";
import Avatar from "../../Avatar";
import {
  Container,
  Banner,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
  PositionAvatar,
} from "./style";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <PositionAvatar>
          <Avatar
            src="https://images.unsplash.com/photo-1643363270472-a6b8927f1780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            size="medium__avatar"
          />
        </PositionAvatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Ptofile</EditButton>

        <h1>Mestoev Yakhya</h1>
        <h2>@mestoev_yakhya</h2>

        <p>
          Web Developer <a href="https://github.com/Mlovz">Github</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Nazran, Russia
          </li>
          <li>
            <CakeIcon />
            22 april, 1998
          </li>
        </ul>

        <Followage>
          <span>
            <strong>40</strong>
            followers
          </span>
          <span>
            <strong>630</strong>
            following
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
