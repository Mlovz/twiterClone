import styled, { css } from "styled-components";
import { LocationOn, Cake } from "../../../styles/icons";
import Button from "../../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: var(--twitter);
  position: relative;
`;
export const PositionAvatar = styled.div`
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 25px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;
  position: relative;
  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;

    opacity: 0.7;
    color: var(--outline);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
  > ul {
    list-style: none;
    margin: 10px 0;
    li ~ li {
      margin-top: 5px;
    }
    > li {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: var(--outline);
      font-weight: 600;
      > svg {
        fill: var(--outline);
        margin-right: 5px;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;
  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

const iconCss = css`
  width: 20px;
  height: 20px;
  fill: var(--outline);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCss}
`;
export const CakeIcon = styled(Cake)`
  ${iconCss}
`;
export const Followage = styled.div`
  display: flex;
  align-items: center;
  > span {
    font-size: 16px;
    font-weight: 600;
    color: var(--outline);
    > strong {
      margin-right: 10px;
      font-weight: 400;
    }
    & + span {
      margin-left: 20px;
    }
  }
`;
