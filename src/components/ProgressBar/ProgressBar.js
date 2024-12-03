/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const HEIGHT_MAP = {
  small: 8,
  medium: 12,
  large: 24,
};

const ProgressBar = ({ value, size }) => {
  return (
    <Container size={size} role="progressbar" aria-valuenow={value}>
      <Bar value={value}></Bar>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: ${(props) => HEIGHT_MAP[props.size] + 'px'};
  padding: ${(props) => props.size === 'large' && '4px'};
  border-radius: ${(props) => props.size === 'large' ? '8px' : '4px'};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${(props) => props.value + '%'};
  border-radius: 4px 0px 0px 4px;
`;


export default ProgressBar;
