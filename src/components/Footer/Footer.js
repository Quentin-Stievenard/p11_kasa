import React from 'react';

// scss
import './Footer.scss';

// image
import footerLogo from '../../images/footerLogo.svg';

export default function Footer() {
  return (
    <main className="bg-black flex flex-col justify-center items-center pt-16 pb-7 ">
      <img src={footerLogo} alt="footer logo kasa" />
      <p className="text-white mt-7">© 2020 Kasa. All rights reserved</p>
    </main>
  );
}
