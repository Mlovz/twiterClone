import React from "react";
import Avatar from "../Avatar";
import {
  Container,
  Retweeted,
  Body,
  AvatarBlock,
  Content,
  Header,
  Dot,
  Description,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ImageContent,
  FixIcon,
  ShareIcon,
} from "./style";

const Tweet = () => {
  return (
    <Container>
      <Retweeted>
        <FixIcon />
        Retweed
      </Retweeted>

      <Body>
        <AvatarBlock>
          <Avatar src="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
        </AvatarBlock>
        <Content>
          <Header>
            <strong>Yakhya</strong>
            <span>@yakhya</span>
            <Dot />
            <time>25 september</time>
          </Header>

          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            perspiciatis?
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon /> 13
            </Status>
            <Status>
              <RetweetIcon /> 7
            </Status>
            <Status>
              <LikeIcon /> 233
            </Status>
            <Status>
              <ShareIcon /> 1
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
