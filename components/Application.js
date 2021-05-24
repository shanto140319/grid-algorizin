import React from 'react';
import styled from 'styled-components';
import { RiCheckboxFill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { FaHandshake } from 'react-icons/fa';
import Link from 'next/link';
const Application = () => {
  return (
    <Wrapper>
      <section className='section'>
        <h2>Application Process</h2>
        <p>Be a part of our program in 4 easy steps!</p>

        <div className='processes'>
          <div className='process'>
            <h3>
              <span>
                <RiCheckboxFill />
              </span>
              Apply
            </h3>
            <p>Apply to our program to see if you are a good fit for us.</p>
          </div>

          <div className='process'>
            <h3>
              <span>
                <AiFillMessage />
              </span>
              Interview
            </h3>
            <p>
              After an initial screening, we will schedule an in-person
              interview with you.
            </p>
          </div>
          <div className='process'>
            <h3>
              <span>
                <AiFillLike />
              </span>
              Acceptance
            </h3>
            <p>
              We will send you an acceptance letter with a contract if you’re a
              right fit.
            </p>
          </div>
          <div className='process'>
            <h3>
              <span>
                <FaHandshake />
              </span>
              Match
            </h3>
            <p>Have your skills assessed and get matched with a mentor!</p>
          </div>
        </div>

        <div className='center'>
          <h2>Launch your Career in the US!</h2>
          <button className='btn'>apply now</button>
          <h4>
            Still thinking?{' '}
            <Link href=''>Schedule a meeting with the experts.</Link>
          </h4>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #ffeff9;
  padding: 2rem 0;
  p {
    font-family: verdana;
    margin-bottom: 5rem;
  }
  .processes {
    display: grid;
    gap: 2rem;
    margin: 3rem 0;

    @media (min-width: 500px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1190px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  .process {
    max-width: 220px;
    h3 {
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        height: 25px;
        width: 25px;

        color: var(--clr-yellow);
      }
    }

    p {
      padding-left: 2.5rem;
      color: darkslategray;
      font-size: 18px;
      font-family: verdana;
      line-height: 30px;
    }
  }

  .center {
    text-align: center;
    button {
      margin: 2rem 0;
    }
    h4 {
      letter-spacing: 0px;
    }
    a {
      color: #4d39e9;
      transition: var(--transition);
    }
    a:hover {
      color: #6041b0;
    }
  }
`;
export default Application;
