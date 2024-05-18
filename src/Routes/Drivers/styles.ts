import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    color: white;
    margin-top: 0;
  }
`;

export const DriversHeader = styled.div``;

export const DriversContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 18px;
  column-gap: 14px;
  width: 70%;
`;
