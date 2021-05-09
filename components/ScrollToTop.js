import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import styled from 'styled-components';
const ScrollToTop = () => {
  return (
    <Wrapper onClick={() => window.scrollTo(0, 0)}>
      <BsArrowUpShort />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  background-color: rgba(0, 0, 0, 0.6);
  height: 40px;
  width: 40px;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 210010;

  svg {
    font-size: 25px;
    cursor: pointer;
  }
`;
export default ScrollToTop;
