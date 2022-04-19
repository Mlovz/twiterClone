import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  Home,
  Search,
  Notifications,
  Email,
  BookmarkBorder,
  ListAlt,
  PersonOutline,
  MoreHoriz,
  Twitter,
  Add,
  Logout,
} from "../../styles/icons";

export const Container = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: auto;
    /* border: 1px solid red; */
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 5px 20px 0;
    max-height: 100vh;
    overflow-y: auto;
    @media (min-width: 1280px) {
      width: min(280px, 100%);
      padding: 9px 29px 20px 0;
    }
  }
`;
export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;
export const MenuButton = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* border: 1px solid red; */
  > span {
    display: none;
    font-family: "Nunito";
    font-weight: 700;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 15px;

      font-size: 19px;
    }
  }
  padding: 8px 15px;

  outline: none;

  & + button {
    margin-top: 16px;
    > span {
      color: #fff;
    }
  }
  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      display: none;
    }
    > svg {
      display: inline;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;
      > span {
        display: inline;
      }
      > svg {
        display: none;
      }
      &:hover {
        background: var(--twitter);
      }
    }
  }
  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--gray_dark);
  }
  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

export const Logo = styled(Twitter)`
  ${iconCSS}
  margin-bottom: 20px;
  margin-left: 0px;
  @media (min-width: 1280px) {
    margin-left: 15px;
  }
  > path {
    fill: var(--twitter);
  }
`;
export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const EploreIcon = styled(Search)`
  ${iconCSS}
`;
export const NotifyIcon = styled(Notifications)`
  ${iconCSS}
`;
export const MessageIcon = styled(Email)`
  ${iconCSS}
`;
export const BookmarkIcon = styled(BookmarkBorder)`
  ${iconCSS}
`;
export const ListIcon = styled(ListAlt)`
  ${iconCSS}
`;
export const ProfileIcon = styled(PersonOutline)`
  ${iconCSS}
`;
export const MoreIcon = styled(MoreHoriz)`
  ${iconCSS}
`;
export const AddIcon = styled(Add)`
  ${iconCSS}
  fill: #fff;
`;

export const BotSide = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  @media (min-width: 1280px) {
    border-radius: 25px;
    padding: 5px;
    transition: background 0.3s;
    &:hover {
      background: var(--gray_dark);
    }
    cursor: pointer;
  }
`;
export const ProfileData = styled.div`
  display: none;
  font-family: "Nunito";

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 16px;
    > span {
      color: var(--outline);
      font-family: "Nunito";
      font-weight: 300;
    }
  }
`;

export const ExitIcon = styled(Logout)`
  ${iconCSS}
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--outline);
    margin-left: 30px;
    cursor: pointer;
  }
  &:hover {
    fill: var(--twitter);
  }
`;
