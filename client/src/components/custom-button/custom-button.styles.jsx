import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #10375c;
  color: #f4f6ff;
  border: none;

  &::before {
    background-color: #f4f6ff;
  }
  &:hover {
    color: #10375c;
    border: none;
  }
`;

const invertedButtonStyles = css`
  background-color: #f4f6ff;
  color: #10375c;
  border: 1px solid #10375c;

  &::before {
    background-color: #10375c;
  }
  &:hover {
    color: #f4f6ff;
    border: none;
  }
`;

const isGoogleSignInStyles = css`
  background-color: #f3c623;
  color: #f4f6ff;

  &::before {
    background-color: #f4f6ff;
  }
  &:hover {
    color: #10375c;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return isGoogleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 40px;
  letter-spacing: 1.2px;
  line-height: 40px;
  padding: 0 35px;
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Bebas Neue", cursive;
  font-weight: normal;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &::before {
    content: "";
    position: absolute;
    border-radius: 15px;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover::before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }

  @media screen and (max-width: 800px) {
    margin: 15px 0;
  }

  ${getButtonStyles}
`;
