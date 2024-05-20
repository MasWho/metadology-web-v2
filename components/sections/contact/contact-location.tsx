import React from 'react';
import LocationCard from './location-card';
import { motion } from 'framer-motion';
import { generateClasses } from '@/utils/styling';

const ContactLocation = () => {
  return (
    <motion.div
      className={generateClasses({
        generic: [
          'flex',
          'flex-col',
          'justify-center',
          'items-center',
          'mx-auto',
          'z-[100]',
          'w-full',
        ],
        mobile: ['px-10', 'max-w-[480px]'],
        web: [
          'tablet:max-w-[900px]',
          'desktop:max-w-[1280px]',
          'tablet:justify-start',
          'tablet:px-0',
          'tablet:pt-10',
        ],
      })}
    >
      <p
        className={generateClasses({
          generic: ['text-c-subtext'],
          mobile: ['text-[0.8rem]', 'mb-8'],
          web: ['desktop:text-[1.2rem]', 'desktop:self-center'],
        })}
      >
        Our Offices
      </p>
      <div
        className={generateClasses({
          generic: [],
          mobile: ['flex', 'flex-col', 'w-full'],
          web: ['tablet:flex-row'],
        })}
      >
        <LocationCard
          location="Chicago USA"
          street="58 North Chicago Road,"
          suburb="Joliet,"
          city="Chicago 60432"
          timezone="US/Pacific"
        />
        <div
          className={generateClasses({
            generic: ['border-b-[1px] border-c-heading border-solid w-full my-3'],
            mobile: [],
            web: ['tablet:border-b-0', 'tablet:border-r-[1px]', 'tablet:w-0', 'tablet:mx-8'],
          })}
        />
        <LocationCard
          location="Miami USA"
          street="3527 NE 168th Street,"
          suburb="North Miami Beach,"
          city="FL 33160"
          timezone="America/Detroit"
        />
        <div
          className={generateClasses({
            generic: ['border-b-[1px] border-c-heading border-solid w-full my-3'],
            mobile: [],
            web: ['tablet:border-b-0', 'tablet:border-r-[1px]', 'tablet:w-0', 'tablet:mx-8'],
          })}
        />
        <LocationCard
          location="Texas USA"
          street="426 Seawind,"
          suburb="Lakeway TX 78734,"
          city="Texas"
          timezone="US/Pacific"
        />
      </div>
      <div
        className={generateClasses({
          generic: [],
          mobile: ['flex', 'flex-col', 'w-full'],
          web: ['tablet:flex-row', 'tablet:mt-10'],
        })}
      >
        <div
          className={generateClasses({
            generic: ['border-b-[1px] border-c-heading border-solid w-full my-3'],
            mobile: ['block'],
            web: [
              'tablet:hidden',
              'tablet:border-b-0',
              'tablet:border-r-[1px]',
              'tablet:w-0',
              'tablet:mx-8',
            ],
          })}
        />
        <LocationCard
          location="Seychelles"
          street="Suite 208, Eden Plaza"
          suburb="Eden Islands,"
          city="Seychelles"
          timezone="Indian/Mahe"
        />
        <div
          className={generateClasses({
            generic: ['border-b-[1px] border-c-heading border-solid w-full my-3'],
            mobile: [],
            web: ['tablet:border-b-0', 'tablet:border-r-[1px]', 'tablet:w-0', 'tablet:mx-8'],
          })}
        />
        <LocationCard
          location="South Africa"
          street="137A Busschau Road,"
          suburb="Bedfordview,"
          city="Johannesburg"
          timezone="Africa/Johannesburg"
        />
        <div
          className={generateClasses({
            generic: ['border-b-[1px] border-c-heading border-solid w-full my-3 opacity-0'],
            mobile: [],
            web: ['tablet:border-b-0', 'tablet:border-r-[1px]', 'tablet:w-0', 'tablet:mx-8'],
          })}
        />
        <LocationCard
          location="Seychelles"
          street="Suite 208, Eden Plaza"
          suburb="Eden Islands,"
          city="Seychelles"
          timezone="Indian/Mahe"
          hide
        />
      </div>
    </motion.div>
  );
};

export default ContactLocation;
