import React from "react";
import { useLocation } from "react-router-dom";
import { Container, TabLink } from "./style";

const tabsLink = [
  { display: "Tweets", to: "tweets" },
  { display: "Media", to: "media" },
  { display: "Likes", to: "likes" },
];

const TabsLinks = () => {
  const location = useLocation();

  return (
    <Container>
      {tabsLink.map((item, index) => {
        return (
          <TabLink
            key={index}
            to={item.to}
            className={`${
              location.pathname === "/profile/" + item.to && "active"
            }`}
          >
            {item.display}
          </TabLink>
        );
      })}
    </Container>
  );
};

export default TabsLinks;
