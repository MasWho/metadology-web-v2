import Image from 'next/image';
import React, { useState } from 'react';
import instagram from '../../public/imgs/instagram_logo.png';
import linkedin from '../../public/imgs/linkedin_logo.png';
import facebook from '../../public/imgs/facebook_logo.png';
import Link from 'next/link';

const privacyPolicyUrl = 'https://d1r0ovlr0podg3.cloudfront.net/doc/privacy-policy';

const Footer = () => {
  return (
    <footer className="py-5 bg-[#101010] flex flex-col justify-center items-center gap-2 tablet:flex-row tablet:gap-8">
      <p className="text-c-heading text-[20px]">
        <span>Follow us </span>
        <span className="text-c-section-heading">on our social media channels</span>
      </p>
      <div className="flex gap-8">
        <Link
          href="https://www.linkedin.com/company/meta-dology/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedin} alt="Linkedin social" width={30} />
        </Link>
        <Link
          href="https://www.instagram.com/this_is_metadology?igsh=MWU1c3Z3eXR4bG80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={instagram} alt="Instagram social" width={30} />
        </Link>
      </div>
      <span className="hidden text-c-section-heading text-[25px] tablet:inline">|</span>
      <hr className="w-[70%] text-c-section-heading my-3 tablet:hidden"/>
      <Link
        href={privacyPolicyUrl}
        target='_blank'
        rel="noopener noreferrer"
        download="privacy-policy.pdf"
        className="text-c-section-heading text-[20px]"
      >
        privacy policy
      </Link>
    </footer>
  );
};

export default Footer;
