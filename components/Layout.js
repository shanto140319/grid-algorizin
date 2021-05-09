import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
