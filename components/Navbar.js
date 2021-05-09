import React, { useEffect, useState } from 'react';
import style from '../styles/navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <section className='section'>
      <nav className={style.nav}>
        <div className={style.logo}>
          <h3>Algorizin</h3>
          <div className={style.bar} onClick={() => setShowNav(true)}>
            <FaBars />
          </div>
        </div>
        <div
          className={showNav ? `${style.navItem} ${style.show}` : style.navItem}
        >
          <ul>
            <div className={style.close} onClick={() => setShowNav(!showNav)}>
              <AiOutlineClose />
            </div>
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
