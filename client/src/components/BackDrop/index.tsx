import React, { ReactChildren, ReactNode } from "react";
import { Container } from "./style";

interface IProps {
  children: ReactNode | ReactChildren;
  onClose?: () => void;
}

const BackDrop: React.FC<IProps> = ({ children, onClose }) => {
  return <Container onClick={onClose}>{children}</Container>;
};

export default BackDrop;
