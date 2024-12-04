import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <PresentationWrapper>
        <TextWrapper>{displayedValue}</TextWrapper>
        <IconWrapper id="chevron-down"></IconWrapper>
      </PresentationWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;


const SelectWrapper = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PresentationWrapper = styled.div`
  color: ${COLORS.gray700};
  display: inline-block;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  
  ${SelectWrapper}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }
  
  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`;

const TextWrapper = styled.span`
  font-family: Roboto;
  font-size: 16px;
`;

const IconWrapper = styled(Icon)`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 16px;
  bottom: 0;
  margin: auto;
  height: 24px;
  width: 24px;
  stroke-width: 2px;
`;


export default Select;
