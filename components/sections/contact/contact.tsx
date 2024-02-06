import SectionLayout from '../../layout/section-layout';
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { generateClasses } from '@/utils/styling';
import ContactBackground from '../../../components/backgrounds/contact-background';
import ContactHeader from './contact-header';
import ContactLink from './contact-link';
import ContactLocation from './contact-location';

const Contact = forwardRef((props, ref: any) => {
  return (
    <SectionLayout sectionName="contact" bgColor="bg-c-primary" background={<ContactBackground />}>
      <div className="relative pt-20 laptop:pt-36 pb-20 px-[5vw] max-w-[1200px] mx-auto">
        <motion.div
          className={generateClasses({
            generic: ['flex', 'flex-col', 'h-full', 'justify-center', 'items-center'],
            mobile: ['gap-16'],
            web: ['laptop:mb-[100px]', 'tablet:gap-6'],
          })}
        >
          <ContactHeader />
          <ContactLink ref={ref} />
          <ContactLocation />
        </motion.div>
      </div>
    </SectionLayout>
  );
});

Contact.displayName = 'Contact';
export default Contact;
