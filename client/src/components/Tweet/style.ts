import styled, { css } from "styled-components";
import {
  Comment,
  Retweet,
  ShareApple,
  Heart,
  AutoFixNormal,
} from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--gray);
  max-width: 100%;
`;
export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--outline);
`;
export const FixIcon = styled(AutoFixNormal)`
  width: 16px;
  height: 16px;
  margin-left: 35px;
  margin-right: 9px;
  fill: var(--outline);
`;
export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;
export const AvatarBlock = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 49px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;
  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--outline);
  }
  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const Dot = styled.div`
  background: #ccc;
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;
export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;
export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: #000;
  border-radius: 14px;
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px auto 0;
  width: 100%;
  @media (min-width: 330px) {
    /* width: 63%; */
  }
`;
export const Status = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;

  > svg {
    margin-right: 5px;
    border-radius: 50%;
    padding: 3px;
    transition: all 0.2s;
  }

  &:hover {
    &:nth-child(1) {
      color: var(--twitter);
      > svg {
        fill: #21a1fc;
        background: #86cbfc9f;
      }
    }
    &:nth-child(2) {
      color: var(--retweet);
      > svg {
        fill: #30ff75;
        background: #b6fccd9f;
      }
    }
    &:nth-child(3) {
      color: var(--like);
      > svg {
        fill: #ff7575ff;
        background: #fcb1b16e;
      }
    }
  }
`;
const iconCSS = css`
  width: 28px;
  height: 28px;
`;

export const CommentIcon = styled(Comment)`
  ${iconCSS}
`;
export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;
export const LikeIcon = styled(Heart)`
  ${iconCSS}
`;
export const ShareIcon = styled(ShareApple)`
  ${iconCSS}
`;
