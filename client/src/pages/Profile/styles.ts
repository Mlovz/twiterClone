import styled, { css } from "styled-components";
import {
  ArrowLeft,
  Home,
  Search,
  Email,
  Notifications,
} from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  height: 59px;
  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--gray);
  background: var(--primary);
  > span {
    font-size: 18px;
    font-family: "Nunito";
    font-weight: 800;
  }
  > button {
    padding: 8px;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    &:hover {
      background: var(--twitter);
      svg {
        fill: var(--primary);
      }
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--outline);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 18px;
    font-family: "Nunito";
    font-weight: 800;
  }
  > span {
    font-size: 15px;
    font-family: "Nunito";
    font-weight: 500;
    color: var(--outline);
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var();
  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--gray);
  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));
  @media (min-width: 500px) {
    display: none;
  }
`;
export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
