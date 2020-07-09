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
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  &::before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: "";
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(
      center,
      ellipse,
      rgba(243, 198, 35, 0.8) 0%,
      rgba(243, 198, 35, 0) 80%
    );
    background: radial-gradient(
      ellipse at center,
      rgba(243, 198, 35, 0.8) 0%,
      rgba(243, 198, 35, 0) 80%
    );
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
  }

  &:hover {
    webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }

  &:hover::before {
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }

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
  font-family: "Source Sans Pro", sans-serif;

  @media screen and (max-width: 800px) {
    width: 88%;
    justify-content: center;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #127681;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: #f3c623;
    height: 3px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover::before {
    left: 0;
    right: 0;
  }

  &:visited::before {
    left: 0;
    right: 0;
  }
`;
