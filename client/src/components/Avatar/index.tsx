import React from "react";
import { AvatarBlock } from "./style";

interface IProps {
  src: string;
  size?: string;
}

const Avatar: React.FC<IProps> = ({ src, size }) => {
  return (
    <AvatarBlock className={`${size}`}>
      <img src={src} alt="avatar" />
    </AvatarBlock>
  );
};

export default Avatar;
