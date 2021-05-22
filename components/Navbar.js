import React, { useState } from 'react';
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
          <a href='/'>
            <h3>Algorizin</h3>
          </a>
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
            <li onClick={() => setShowNav(false)}>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={() => setShowNav(false)}>
              <Link href='/about'>about</Link>
            </li>
            <li onClick={() => setShowNav(false)}>
              <Link href='/program'>Program</Link>
            </li>
            <li onClick={() => setShowNav(false)}>
              <Link href='/projects'>Projects</Link>
            </li>

            <li onClick={() => setShowNav(false)}>
              <Link href='/hireGrad'>hire a grad</Link>
            </li>
            <li onClick={() => setShowNav(false)}>
              <button className='btn'>apply now</button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
