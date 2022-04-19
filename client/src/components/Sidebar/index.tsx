import React from "react";
import StickyBox from "react-sticky-box";

import List from "../List";
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./style";

const Sidebar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search in twitter..." />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="who to follow"
            elements={[<h6>Test1</h6>, <h6>Test2</h6>, <h6>Test2</h6>]}
          />
          <List
            title="who to follow"
            elements={[<h6>Test1</h6>, <h6>Test2</h6>, <h6>Test2</h6>]}
          />
          <List
            title="who to follow"
            elements={[<h6>Test1</h6>, <h6>Test2</h6>, <h6>Test2</h6>]}
          />
          <List
            title="who to follow"
            elements={[<h6>Test1</h6>, <h6>Test2</h6>, <h6>Test2</h6>]}
          />
          <List
            title="who to follow"
            elements={[<h6>Test1</h6>, <h6>Test2</h6>, <h6>Test2</h6>]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
