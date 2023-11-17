import React from 'react';
import SectionLayout from '../layout/section-layout';
import { generateClasses } from '@/utils/styling';
import logo from '../../public/imgs/logo.png';
import Image from 'next/image';
import GreenButton from '../buttons/green-button';

const Home = () => {
  return (
    <SectionLayout sectionName={'home'}>
      <div className={generateClasses({
        generic: ['flex flex-col items-center justify-center h-[100vh] mx-auto w-[80%] mt-[-70px]'],
        mobile: ['gap-[40px]'],
        web: ['tablet:gap-[50px] desktop:gap-[70px]']
      })}>
        <h1 className={generateClasses({
          generic: ['text-c-heading', 'text-center'],
          mobile: ['text-[24px]'],
          web: ['tablet:text-[36px] desktop:text-[48px]']
        })}>Crafting the blueprint for the future of proptech</h1>
        <Image 
          src={logo}
          alt='meta-dology logo'
          className='w-[80%] tablet:w-[60%] desktop:w-[50%]'
          priority
        />
        <div className='text-c-heading text-[16px] text-center tablet:w-[80%] tablet:text-[20px] desktop:text-[24px]'>
          <GreenButton text="Contact Us" />
          <p className='mt-5'>Get in touch.</p>
          <p>Ask us how you can leverage out technology to boost your sales</p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Home;
