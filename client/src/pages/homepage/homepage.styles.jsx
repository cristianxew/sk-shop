import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 6rem;
  font-family: "Lobster Two", cursive;
  min-height: calc(100vh - 186px);

  @media screen and (max-width: 800px) {
    padding: 2rem 1rem;
  }
`;
