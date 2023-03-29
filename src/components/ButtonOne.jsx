import React from "react";
import styled from "styled-components";

const ButtonOne = ({ name }) => {
  return (
    <Wrapper>
      <p>{name}</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 183px;
  height: 61px;
  background-color: #fff;
  border: 4px solid #ef8094;
  border-radius: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
  }
`;
export default ButtonOne;
