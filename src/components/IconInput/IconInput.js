import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "small" ? 16 : 24;
  const textSize = size === "small" ? 14 : 18;
  const inputPaddingVer = size === "small" ? 4 : 8;
  const inputPaddingHor = size === "small" ? 24 : 36;
  const iconPaddingVer = size === "small" ? 4 : 6;
  const inputBorderWidth = size === "small" ? 1 : 2;
  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--icon": iconSize + "px",
        "--text": textSize + "px",
        "--paddingTop": inputPaddingVer + "px",
        "--paddingLeft": inputPaddingHor + "px",
        "--iconPadding": iconPaddingVer + "px",
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
  top: var(--iconPadding);
  left: 0;
  bottom: var(--iconPadding);
  width: var(--icon);
  height: 100%;
`;

const InputWrapper = styled.input`
  padding-left: var(--paddingLeft);
  padding-top: var(--paddingTop);
  padding-bottom: var(--paddingTop);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: var(--borderWidth) solid black;
  font-size: var(--text);
  font-weight: 700;
  width: 100%;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  
  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
