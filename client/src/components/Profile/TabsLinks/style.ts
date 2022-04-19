import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;
export const TabLink = styled(Link)`
  padding: 10px 3px;
  border-bottom: 4px solid transparent;
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    background: #eee;
  }
  &.active {
    border-bottom: 4px solid var(--twitter);
  }
`;
