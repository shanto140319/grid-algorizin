import React, { useRef } from 'react';
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { SiTelegram } from 'react-icons/si';
import { IoMdArrowDropright } from 'react-icons/io';

import Carousel from 'react-elastic-carousel';

const data = [
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/facebook-logo.png',
  },
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/amazon-logo.png',
  },
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/citibank-logo.png',
  },
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/Microsoft-Logo.png',
  },
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/samsung-logo.png',
  },
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/facebook-logo.png',
  },
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/amazon-logo.png',
  },
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/citibank-logo.png',
  },
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/Microsoft-Logo.png',
  },
  {
    image:
      'https://www.algorizin.com/wp-content/uploads/2020/07/samsung-logo.png',
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 2, pagination: false },
  { width: 550, itemsToShow: 3, pagination: false },
  { width: 768, itemsToShow: 4, pagination: false },
  { width: 1000, itemsToShow: 5, pagination: false },
];

const projects = () => {
  //carousel
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(universities.length);
    }
  };

  return (
    <>
      <Wrapper>
        <section className='section'>
          <div className='grid top'>
            <div className='topleft'>
              <h2>A dedicated team behind you to get you hired!</h2>
              <p>
                Landing job in the US without any professional network or
                industry experience is hard. We know it because we’ve been
                through it. Our goal is to ensure you land a high-paid job fast,
                using the latest insights and connections we’ve in the industry.
              </p>
              <button className='btn'>apply now</button>
            </div>
            <div className='topright'>
              <img
                src='https://www.algorizin.com/wp-content/uploads/2020/08/team.jpg'
                alt=''
              />
            </div>
          </div>
        </section>
        <WhyUs>
          <section className='section'>
            <div className='grid middle'>
              <div className='middleleft'>
                <img
                  src='https://algorizin.com/wp-content/uploads/2020/07/Tution-resized.png'
                  alt=''
                />
              </div>
              <div className='middleright'>
                <h1>why us ?</h1>

                <p>
                  <span>
                    <GiCheckMark />
                  </span>
                  Get a team of experienced professionals from Microsoft, Apple,
                  Facebook, Google, Amazon, Citibank, Intel, Uber, Cisco &
                  Samsung to coach you to find your next opportunity.
                </p>

                <p>
                  <span>
                    <GiCheckMark />
                  </span>{' '}
                  Get 1:1 sessions with industry professionals on career road
                  mapping, resume writing, interview prep, coding challenges,
                  job search best practice, referrals and introductions.
                </p>
                <p>
                  <span>
                    <GiCheckMark />
                  </span>{' '}
                  Our recruiter team applies to jobs for you until you are
                  hired.
                </p>
              </div>
            </div>
          </section>
        </WhyUs>

        <Ensure>
          <h1>How do we ensure you’re hired?</h1>
          <section className='section'>
            <div className='processes'>
              <div className='single'>
                <div className='heading'>
                  <div className='icon'>
                    <FaLaptopCode />
                  </div>

                  <h3>Plan</h3>
                </div>
                <div className='content'>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Skill assessment
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Career roadmapping
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Resume writing
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Portfolio building
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Coding challenges
                  </p>
                </div>
              </div>

              {/* ========================================= */}

              <div className='single'>
                <div className='heading'>
                  <div className='icon'>
                    <BiSearch />
                  </div>

                  <h3>execute</h3>
                </div>
                <div className='content'>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Job application support <br /> (we apply to jobs for you)
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Mock interviews
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Technical interview prep
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Referrals and introductions
                  </p>
                </div>
              </div>

              {/* =====================================
               */}
              <div className='single'>
                <div className='heading'>
                  <div className='icon'>
                    <SiTelegram />
                  </div>

                  <h3>secure</h3>
                </div>
                <div className='content'>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Salary negotiation
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Immigration / VISA consultation
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Technical support while you’re employed
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Retrain if you’re fired or laid off
                  </p>
                  <p>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    Coding challenges
                  </p>
                </div>
              </div>
            </div>

            <button className='btn'>apply now</button>
          </section>
        </Ensure>

        {/* ========================================= */}

        <CarouselImage>
          <section className='section'>
            <div className='carousel'>
              <Carousel
                breakPoints={breakPoints}
                enableAutoPlay
                autoPlaySpeed={1500}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
              >
                {data.map((item, index) => {
                  return (
                    <div key={index} className='carouselItem'>
                      <img src={item.image} alt='' />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </section>
        </CarouselImage>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  .grid {
    display: grid;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .top {
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .topleft {
    p {
      margin: 1.5rem 0;
    }
  }
  .topright {
    img {
      width: 100%;
    }
  }
`;
const WhyUs = styled.div`
  background-color: var(--clr-bg-3);
  padding: 1.5rem 0;
  margin-bottom: 4rem;

  .middleleft {
    img {
      width: 100%;
    }
  }
  .middleright {
    p {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin: 1rem 0;
      svg {
        font-size: 15px;
        color: blue;
      }
    }
  }
`;

const Ensure = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .processes {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 930px) {
      justify-content: space-around;
    }
  }
  .single {
    display: flex;
    flex-direction: column;
    max-width: 350px;
    align-items: center;
  }
  .heading {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  .icon {
    svg {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      color: #fff;
      background-color: blue;
      padding: 0.5rem;
    }
  }
  .content {
    p {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin: 1rem 0;
      svg {
        font-size: 20px;
        color: blue;
      }
    }
  }
  button {
    margin: auto;
    margin-bottom: 3rem;
    text-align: center;
    display: block;
  }
`;

const CarouselImage = styled.div`
  padding: 1.5rem;
  margin-bottom: 3rem;
  .carouselItem {
    img {
      height: 110px;
      width: 110px;
      object-fit: cover;
    }
  }
`;
export default projects;
