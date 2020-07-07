import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin: 0.7rem auto;
  @media screen and (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 0;
    height: auto;
  }
`;

export const LogoContainer = styled(Link)`
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  color: #127681;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 88%;
    justify-content: center;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #127681;
`;
