import React, { useEffect, useState } from 'react';
import style from '../styles/navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';
import Link from 'next/link';
// import logo from '../public/images/logo.png';
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      if (window.pageYOffset >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  }
  return (
    <div className={!sticky ? style.navbar : `${style.navbar} ${style.sticky}`}>
      <section className='section'>
        <nav className={style.nav}>
          <div className={style.logo}>
            <a href='/'>
              <img
                src='https://algorizin.com/wp-content/uploads/2021/05/cropped-Logo_Final-180x41.png'
                alt='logo'
              />
            </a>
            <div className={style.bar} onClick={() => setShowNav(true)}>
              <FaBars />
            </div>
          </div>
          <div
            className={
              showNav ? `${style.navItem} ${style.show}` : style.navItem
            }
          >
            <ul>
              <div className={style.close} onClick={() => setShowNav(!showNav)}>
                <AiOutlineClose />
              </div>
              <li className={style.dropdown} onClick={() => setShowNav(false)}>
                <Link href='/'>our program</Link>
                <span>
                  <AiOutlineDown />
                </span>

                <ul className={style.submenu}>
                  <li onClick={() => setShowNav(false)}>
                    <Link href='/about'>curriculum</Link>
                  </li>
                  <li onClick={() => setShowNav(false)}>
                    <Link href='/about'>carrier</Link>
                  </li>
                  <li onClick={() => setShowNav(false)}>
                    <Link href='/about'>tution</Link>
                  </li>
                </ul>
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
    </div>
  );
};

export default Navbar;
