import React, { FC, ReactElement, ReactText, ReactHTMLElement } from "react";
import styled from "styled-components";

import { colors, fonts } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: ${pxToRem(213)};
  height: ${pxToRem(43)};
  border: 0;
  font-family: ${fonts.fira};
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.white};
  border-radius: ${pxToRem(13)};
  background: ${colors.purple5};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${colors.purple5};
    background: ${colors.white};
    transform: scale(1.1);
  }
`;

type Props = {
  children?: ReactElement[] | ReactElement | ReactText;
  onMouseEnter?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
  onClick?: (event: any) => void;
};

export const Button: FC<Props> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
