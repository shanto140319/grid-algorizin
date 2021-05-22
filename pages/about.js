import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const about = () => {
  return (
    <>
      <Wrapper>
        <section className='section'>
          <h1>Meet our graduates</h1>

          <div className='flex'>
            <div className='single'>
              <a href=''>
                <img
                  src='https://www.algorizin.com/wp-content/uploads/2021/03/IMG_3974-copy-460x295.png'
                  alt=''
                />
              </a>
              <div className='content'>
                <h3>
                  <Link href=''>Tarannum</Link>
                </h3>
                <small>full time</small>
                <p>I really appreciate the practice sessions which helped a</p>
              </div>
            </div>
            <div className='single'>
              <a href='#'>
                <img
                  src='https://www.algorizin.com/wp-content/uploads/2021/04/Screenshot_1-460x295.jpg'
                  alt=''
                />
              </a>
              <div className='content'>
                <h3>
                  <Link href=''>Manjeet Chapagai</Link>
                </h3>
                <small>full time</small>
                <p>“I believe the team I was a part of</p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
      <Meeting>
        <section className='section'>
          <h1 className='center'>
            Still not convinced? Let’s schedule a meeting
          </h1>
          <div className='grid'>
            <div className='left'>
              <img
                src='https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/6476616/50d48b60.png'
                alt=''
              />
              <p>Algorizin meets</p>
              <h3>Meet with Algorizin</h3>
            </div>
          </div>
        </section>
      </Meeting>
    </>
  );
};
const Wrapper = styled.section`
  background-color: var(--clr-bg-3);
  min-height: 85vh;
  padding: 2rem 0;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

    flex-wrap: wrap;
  }
  .single {
    img {
      width: 100%;
    }
  }
  .content {
    h3 {
      margin-bottom: 0;
      margin-top: 0.7rem;
    }
    p {
      margin-top: 1rem;
    }
  }
`;
const Meeting = styled.div`
  background-color: var(--clr-bg-2);
  min-height: 85vh;
  padding: 2rem 0;
  .center {
    text-align: center;
  }

  .grid {
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #fff;

    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .left {
    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
    }
  }
`;
export default about;
