import styled from "styled-components";

interface Props {
  outlined?: boolean;
  bg?: string;
  color?: string;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? `#fff` : props.bg)};
  color: ${(props) => (props.outlined ? props.color : "#fff")};
  border: ${(props) => (props.outlined ? `1px solid ${props.color}` : "none")};
  padding: 13px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  /* &:hover {
    background: ${(props) =>
    props.outlined ? "var(--twitter)" : "var(--twitter-light-hover)"};
    color: ${(props) => (props.outlined ? "var(--primary)" : "var(--primary)")};
  } */
`;
