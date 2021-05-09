import React, { useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import styled from 'styled-components';
const ScrollToTop = () => {
  useEffect(() => {
    window.addEventListener('scroll', function () {
      let scroll = document.querySelector('.scrollTop');
      scroll.classList.toggle('active', window.scrollY > 500);
    });
  }, []);

  return (
    <Wrapper>
      <div className='scrollTop' onClick={() => window.scrollTo(0, 0)}>
        <BsArrowUpShort />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .scrollTop {
    opacity: 0;
    visibility: hidden;
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
    transition: var(--transition);
  }
  .active {
    opacity: 1;
    visibility: visible;
  }

  svg {
    font-size: 25px;
    cursor: pointer;
  }
`;
export default ScrollToTop;
