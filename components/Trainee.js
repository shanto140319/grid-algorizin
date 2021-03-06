import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
const data = [
  {
    image: 'images/Sajid-2-200x200.webp',
    name: 'Sajid Sharlemin',
    company: 'Microsoft',
    logo: 'images/Microsoft-Logo-1.webp',
  },
  {
    image: 'images/Anna-Piasek-300x300.webp',
    name: 'Sajid Sharlemin',
    company: 'Microsoft',
    logo: 'images/Microsoft-Logo-1.webp',
  },
  {
    image: 'images/Samyo-300x300.png',
    name: 'Sajid Sharlemin',
    company: 'Microsoft',
    logo: 'images/Microsoft-Logo-1.webp',
  },
  {
    image: 'images/Jushita-300x300.png',
    name: 'Sajid Sharlemin',
    company: 'Microsoft',
    logo: 'images/Microsoft-Logo-1.webp',
  },
  {
    image: 'images/mentorSalman-300x300.webp',
    name: 'Sajid Sharlemin',
    company: 'Microsoft',
    logo: 'images/Microsoft-Logo-1.webp',
  },
];
const Trainee = () => {
  return (
    <Wrapper className='section'>
      <h2>Get trained by industry professionals from the top tech companies</h2>
      <div className='mentors'>
        {data.map((item, index) => {
          const { image, name, company, logo } = item;
          return (
            <div className='single' key={index}>
              <Link href=''>
                <img src={image} alt='' />
              </Link>
              <h4 className='name'>{name}</h4>
              <p>{company}</p>
              <img className='logo' src={logo} alt='' />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 3rem auto;
  h2 {
    text-align: center;
  }

  .mentors {
    margin-top: 2rem;
    display: grid;
    align-items: center;
    gap: 0.8rem;
    row-gap: 1rem;
    @media (min-width: 480px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 750px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 970px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 1190px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
  .single {
    text-align: center;
    background-color: #f2f2f2;
    padding: 1.3rem;
    img {
      height: 180px;
      width: 180px;
      cursor: pointer;
      transition: var(--transition);
      :hover {
        transform: scale(1.04);
        box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.22);
        -webkit-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.22);
        -moz-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.22);
      }
    }

    h4 {
      margin-top: 1rem;
      font-size: 18px;
      margin-bottom: 0.5rem;
    }
    .logo {
      margin-top: 2.5rem;
      height: 40px;
      width: 40px;
    }
  }
`;
export default Trainee;
