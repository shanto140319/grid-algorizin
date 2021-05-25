import React from 'react';
import style from '../styles/hero.module.css';
import { FaHandshake } from 'react-icons/fa';
const Hero = () => {
  return (
    <main className={style.bg}>
      <section className='section'>
        <div className={style.hero}>
          <div className={style.content}>
            <h3>Land your First Job as an Immigrant in the US</h3>
            <div className={style.desc}>
              <ul>
                <li>
                  <span>
                    <FaHandshake />
                  </span>
                  Learn hands-on software development skills by working with
                  industry experts
                </li>
                <li>
                  <span>
                    <FaHandshake />
                  </span>
                  Get 1-on-1 mentorship for your career and immigration
                  struggles
                </li>
                <li>
                  <span>
                    <FaHandshake />
                  </span>
                  Land a tech job and secure your stay in the US
                </li>
              </ul>
            </div>

            <button className='btn'>apply now</button>
            <h3 className={style.pay}>Pay only after you are hired!</h3>
          </div>
          <div className={style.image}>
            <img src='images/Target-resized.webp' alt='' />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
