import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "small" ? 16 : 24;
  const textSize = size === "small" ? 14 : 18;
  const inputHeight = size === "small" ? 24 : 36;
  const inputPaddingLeft = size === "small" ? 24 : 36;
  const inputBorderWidth = size === "small" ? 1 : 2;
  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--icon": iconSize + "px",
        "--text": textSize + "px",
        "--inputHeight": inputHeight + "px",
          "--paddingLeft": inputPaddingLeft + "px",
        "--borderWidth": inputBorderWidth + "px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={iconSize}></Icon>
      </IconWrapper>
      <InputWrapper type="text" placeholder={placeholder}></InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:focus {
    outline: 2px solid red;
    outline-offset: 2px;
  }
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--icon);
  height: var(--icon);
  pointer-events: none;
`;

const InputWrapper = styled.input`
  padding-left: var(--paddingLeft);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: var(--borderWidth) solid black;
  font-size: var(--text);
  font-weight: 700;
  width: 100%;
  height: var(--inputHeight);
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  
  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
