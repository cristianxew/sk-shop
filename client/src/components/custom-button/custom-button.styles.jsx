import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #10375c;
  color: #f4f6ff;
  border: none;

  &:hover {
    background-color: #f4f6ff;
    color: #10375c;
    border: 1px solid #f3c623;
  }
`;

const invertedButtonStyles = css`
  background-color: #f4f6ff;
  color: #10375c;
  border: 1px solid #10375c;

  &:hover {
    background-color: #10375c;
    color: #f4f6ff;
    border: none;
  }
`;

const isGoogleSignInStyles = css`
  background-color: #f3c623;
  color: #f4f6ff;

  &:hover {
    background-color: #fff;
    color: #10375c;
    border: 1px solid #f3c623;
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
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Bebas Neue", cursive;
  font-weight: normal;
  cursor: pointer;
  display: flex;
  border: none;
  border-radius: 10px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    margin: 15px 0;
  }

  ${getButtonStyles}
`;
