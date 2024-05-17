import styled from "styled-components";

export const BackgroundOpacity = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  opacity: 0.7;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  width: 330px;

  h2 {
    color: white;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`;
