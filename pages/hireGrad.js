import React from 'react';
import styled from 'styled-components';

const hireGrad = () => {
  return (
    <Wrapper>
      <section className='section grid'>
        <article>
          <h3>Become a hiring partner</h3>
          <p>
            Algorizin teaches the talents job-ready skills. Our graduates are
            mentored by mentors from top tech companies. Join as our hiring
            partner for free.
          </p>
          <img
            src='https://www.algorizin.com/wp-content/uploads/2021/03/job-removebg-preview-400x267.png'
            alt=''
          />
        </article>
        <article>
          <form>
            <div className='flex'>
              <span>
                <label htmlFor='name'>Full name*</label>
                <input type='text' name='name' id='name' required />
              </span>
              <span>
                <label htmlFor='email'>Your Email*</label>
                <input type='email' name='email' id='email' required />
              </span>
            </div>
            <span>
              <label htmlFor='company'>Your Company</label>
              <input type='text' name='company' id='company' />
            </span>

            <span className='message'>
              <label htmlFor='message'>Your message (optional)</label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='8'
              ></textarea>
            </span>
            <button className='btn submit' type='submit'>
              send
            </button>
          </form>
        </article>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 2rem 0;
  background-color: #f1f7fb;
  min-height: 80vh;
  .grid {
    display: grid;
    gap: 3rem;
    @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  article {
    p {
      margin-top: 1.5rem;
    }
    img {
      max-width: 95%;
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1.5rem;
    width: 100%;
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
  }
  span {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  label {
    font-size: 18px;
    color: #5c6770;
  }
  input {
    height: 40px;
    border: 1px solid #ddd;
  }
  .message {
    margin-top: 2rem;
    margin-bottom: 1rem;
    textarea {
      border: 1px solid #ddd;
    }
  }

  .submit {
    width: 100px;
  }
`;
export default hireGrad;
