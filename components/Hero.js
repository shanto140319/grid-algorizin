import React from 'react';
import style from '../styles/hero.module.css';
import { FaHandshake } from 'react-icons/fa';
const Hero = () => {
  return (
    <section className='section'>
      <div className={style.hero}>
        <div className={style.content}>
          <h3>Land your First Job as an Immigrant in the US</h3>
          <div className={style.desc}>
            <p>
              <span>
                <FaHandshake />
              </span>
              Learn hands-on software development skills by working with
              industry experts
            </p>
            <p>
              <span>
                <FaHandshake />
              </span>
              Get 1-on-1 mentorship for your career and immigration struggles
            </p>
            <p>
              {' '}
              <span>
                <FaHandshake />
              </span>
              Land a tech job and secure your stay in the US
            </p>
          </div>

          <button className='btn'>apply now</button>
          <h3 className={style.pay}>Pay only after you are hired!</h3>
        </div>
        <div className={style.image}>
          <img
            src='https://algorizin.com/wp-content/uploads/2020/07/Target-resized.png'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
