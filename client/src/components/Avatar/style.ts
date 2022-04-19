import styled from "styled-components";

export const AvatarBlock = styled.div`
  width: max(30px, min(40px, 12vw));
  height: max(30px, min(40px, 12vw));
  border-radius: 100%;
  object-fit: cover;
  border: 3px solid var(--primary);

  &.medium__avatar {
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));
  }
  > img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;
