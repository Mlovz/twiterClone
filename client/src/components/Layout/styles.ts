import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  span,
  strong,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  a,
  time,
  button,
  input {
    font-family: "Nunito";
  }
  .route_main {
    width: min(630px, 100%);
    @media (min-width: 500px) {
      border-left: 1px solid var(--gray);
      border-right: 1px solid var(--gray);
    }
  }
  /* border: 1px solid red; */
`;
