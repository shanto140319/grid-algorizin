import React from 'react';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <Wrapper>
      <p>© Copyright 2021 | Algorizin, Inc | All Rights Reserved</p>
      <div>
        <ul className='social'>
          <li>
            <Link href=''>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href=''>
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href=''>
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link href=''>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href=''>
              <FaWhatsapp />
            </Link>
          </li>
          <li>
            <Link href=''>
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  padding: 1rem;
  text-align: center;
  height: 200px;
  background-color: #1b2032;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    color: #fff;
  }

  .social {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: #7d8694;
    li {
      cursor: pointer;
    }
    svg {
      font-size: 18px;
    }
  }
`;
export default Footer;
