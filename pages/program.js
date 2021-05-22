import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const program = () => {
  return (
    <Wrapper>
      <section className='section'>
        <div className='grid'>
          <div className='left'>
            <h1>Tuition</h1>
            <p>
              Imagine going to the gym and having to only pay if you reach your
              workout goals! That is exactly how we offer tuition to our
              students. Our graduates only pay us after they start making an
              annual salary of $50,000. This is called an ISA or an Income Share
              Agreement.
            </p>
          </div>
          <div className='right'>
            <img
              src='https://www.algorizin.com/wp-content/uploads/2020/07/contract-resized-600x338.png'
              alt=''
            />
          </div>
        </div>

        {/* ========================================= */}
        <div className='benifit'>
          <h3>Benefits of ISA</h3>
          <div className='grid '>
            <div className='single'>
              <p>
                <FaCheck />
                Activates after you start making an annual salary of $50,000
              </p>
              <p>
                <FaCheck />
                Pay only 10% of your monthly income
              </p>
              <p>
                <FaCheck />
                Never pay the months you’re unemployed
              </p>
            </div>
            <div className='single'>
              <p>
                <FaCheck />
                Aligns our interests with yours and ensures long term support
              </p>
              <p>
                <FaCheck />
                No hidden fees, never pay more than $15,000 in total
              </p>
              <p>
                <FaCheck />
                If we fail to land you a job within 5 years, your ISA gets
                voided
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 3rem;

  .grid {
    display: grid;
    gap: 2.5rem;
    align-items: center;

    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .right {
    img {
      width: 100%;
    }
  }

  .benifit {
    margin-top: 1.5rem;
    margin-bottom: 5rem;
  }
  h3 {
    margin-bottom: 2rem;
  }
  .single {
    p {
      display: flex;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid #ddd;
      padding-bottom: 1rem;
      margin-bottom: 1.5rem;
      svg {
        color: yellow;
        font-size: 20px;
        font-weight: bolder;
      }
    }
  }
`;
export default program;
