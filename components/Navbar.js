import React from 'react';
import style from '../styles/navbar.module.css';

import Link from 'next/link';

const Navbar = () => {
  return (
    <section className='section'>
      <nav className={style.nav}>
        <div className={style.logo}>
          <h3>Algorizin</h3>
        </div>
        <div className={style.navItem}>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>about</Link>
            </li>
            <li>
              <Link href='/program'>Program</Link>
            </li>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
            <li>
              <Link href='/contact'>contact</Link>
            </li>
            <li>
              <Link href='/blog'>blog</Link>
            </li>
            <li>
              <button className='btn'>apply now</button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
