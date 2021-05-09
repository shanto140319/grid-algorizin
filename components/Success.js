import Link from 'next/link';
import React from 'react';
import style from '../styles/success.module.css';
import { FaHandsHelping } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';
const Success = () => {
  return (
    <main className={style.bg}>
      <section className='section'>
        <div className={style.flex}>
          <div className={style.left}>
            <h2>
              The recipe of your <br />
              success
            </h2>
            <p>
              Skillbuilding, career services and immigration support- you name
              it, our community will back you until you land the job of your
              dreams. And the best part is, our mentors are all immigrants like
              you!
            </p>
            <img
              src='https://www.algorizin.com/wp-content/uploads/2020/07/bulb-resized-600x338.png'
              alt=''
            />
          </div>
          <div className='right'>
            <div className={style.single}>
              <div className={style.icon}>
                <FaUserGraduate />
              </div>
              <span>
                <h3>Learn</h3>
                <p>
                  Learn With our live coding classes, learn how to solve
                  problems, and{' '}
                  <Link href=''>become a full-stack developer!</Link>
                </p>
              </span>
            </div>
            {/* ======================================== */}
            <div className={style.single}>
              <div className={style.icon}>
                <MdShare />
              </div>
              <span>
                <h3>build</h3>
                <p>
                  Get hands-on internship experience by working on a live
                  product with an expert team!
                </p>
              </span>
            </div>
            {/* ======================================== */}
            <div className={style.single}>
              <div className={style.icon}>
                <FaHandsHelping />
              </div>
              <span>
                <h3>earn</h3>
                <p>
                  Have your portfolio reviewed, get launched into the market and
                  kick start your tech career in the US!
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Success;
