import React, { useEffect } from 'react';
import SectionLayout from '../layout/section-layout';
import { generateClasses } from '@/utils/styling';
import logo from '../../public/imgs/logo.svg';
import Image from 'next/image';
import GreenButton from '../buttons/green-button';
import BubbleBackground from '../backgrounds/bubble-background';
import ScrollButton from '../buttons/scroll-button';
import { AllSections } from '@/pages';
import { useNavContext } from '@/contexts/NavContext';
import Link from 'next/link';
import useChangePage from '@/hooks/use-change-page';

const Home = () => {
  const { currentPageId, changePageScrollHandler } = useChangePage();

  return (
    <SectionLayout sectionName={'home'} background={<BubbleBackground />}>
      <div
        className={generateClasses({
          generic: [
            'flex flex-col items-center justify-center h-[100vh] mx-auto w-[80%] mt-[-70px]',
          ],
          mobile: ['gap-[40px]'],
          web: ['tablet:gap-[50px] desktop:gap-[70px]'],
        })}
      >
        <div className="relative w-[75vw] tablet:w-[60vw] max-w-[732px] aspect-[732/126]">
          <Image
            src={logo}
            alt="meta-dology logo"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
        <h1
          className={generateClasses({
            generic: ['text-c-heading', 'text-center'],
            mobile: ['text-[20px]'],
            web: ['tablet:text-[28px] desktop:text-[36px]'],
          })}
        >
          Global leaders in selling property with 3D experiences
        </h1>
        <div className="text-c-heading text-[16px] text-center tablet:w-[80%] tablet:text-[20px] desktop:text-[24px]">
          <GreenButton
            text={
              <Link
                href=""
                className={currentPageId === 'contact' ? 'text-c-accent-green' : ''}
                onClick={changePageScrollHandler.bind(null, 'contact')}
              >
                Contact Us
              </Link>
            }
          />
          <p className="mt-7">Get in touch to accelerate your sales</p>
        </div>
        <ScrollButton />
      </div>
    </SectionLayout>
  );
};

export default Home;
