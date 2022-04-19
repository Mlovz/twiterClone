import React from "react";
import Tweet from "../Tweet";
import { Tweets } from "./style";

interface IProps {
  data: number[];
}

const Feed: React.FC<IProps> = ({ data }) => {
  return (
    <Tweets>
      {data.map((item, index) => (
        <Tweet key={index} />
      ))}
    </Tweets>
  );
};

export default Feed;
