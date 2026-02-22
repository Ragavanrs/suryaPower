import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import MobileCallBar from './MobileCallBar';

/* Hidden until focused — lets keyboard/SR users skip repeated nav (WCAG 2.4.1) */
const SKIP_LINK_HIDDEN = {
  position: 'absolute',
  left: '-9999px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
};

const SKIP_LINK_VISIBLE = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: 'auto',
  height: 'auto',
  padding: '12px 24px',
  background: '#D84315',
  color: '#FFFFFF',
  fontSize: '1rem',
  fontWeight: '700',
  zIndex: '9999',
  outline: '3px solid #FFFFFF',
  outlineOffset: '2px',
  borderRadius: '0 0 8px 0',
  textDecoration: 'none',
};

const Layout = () => {
  return (
    <>
      {/* Skip navigation — first focusable element in the DOM */}
      <a
        href="#main-content"
        style={SKIP_LINK_HIDDEN}
        onFocus={(e) => { Object.assign(e.currentTarget.style, SKIP_LINK_VISIBLE); }}
        onBlur={(e)  => { Object.assign(e.currentTarget.style, SKIP_LINK_HIDDEN); }}
      >
        Skip to main content
      </a>

      <Header />

      {/* id="main-content" is the skip-link target */}
      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloat />
      <MobileCallBar />
    </>
  );
};

export default Layout;
