import React from 'react';
import PopupLayout, { BasePopupProps } from './popup-layout';
import DynamicReactPlayer from '../video/DynamicReactPlayer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const VIDEO_URL =
  'https://d1r0ovlr0podg3.cloudfront.net/videos/sellfaster-subsection-two-popup-video-1';
const THUMBNAIL_URL =
  'https://d1r0ovlr0podg3.cloudfront.net/imgs/sellfaster-subsection-two-popup-video-1-thumbnail';
const IMG_ONE_URL =
  'https://d1r0ovlr0podg3.cloudfront.net/imgs/sellfaster-subsection-two-popup-img-1';
const VIDEO_TWO_URL =
  'https://d1r0ovlr0podg3.cloudfront.net/videos/sellfaster-subsection-two-popup-video-2';
const VIDEO_THREE_URL =
  'https://d1r0ovlr0podg3.cloudfront.net/videos/sellfaster-subsection-two-popup-video-3';
const IMG_TWO_URL =
  'https://d1r0ovlr0podg3.cloudfront.net/imgs/sellfaster-subsection-two-popup-img-2';
const IMG_THREE_URL =
  'https://d1r0ovlr0podg3.cloudfront.net/imgs/sellfaster-subsection-two-popup-img-3';

const SubsectionTwoPopup = (props: BasePopupProps) => {
  const { onClose } = props;
  return (
    <PopupLayout onClose={onClose}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-c-heading max-w-[600px] mx-auto"
      >
        <p className="text-[32px] tablet:text-[40px] mb-4">Payments and Inventory</p>
        <p className="text-[24px] tablet:text-[32px] mb-4">Inventory management</p>
        <p className="text-c-section-heading mb-4">
          A real time inventory management database that allows buyers to select, explore & secure
          properties. The inventory system visualizes the units in a 3-dimensional perspective, &
          includes the status of the following:
        </p>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li className="text-[#4eff4e]">
            <span className="text-c-heading">Available</span>
          </li>
          <li className="text-[red]">
            <span className="text-c-heading">Sold (Deposit & Contract)</span>
          </li>
          <li className="text-[yellow]">
            <span className="text-c-heading">Deposit paid</span>
          </li>
        </ul>
      </motion.div>
      <div className="max-w-[700px] mx-auto mt-10">
        <DynamicReactPlayer
          controls
          url={VIDEO_URL}
          playing={true}
          volume={1}
          muted={false}
          width={'100%'}
          height={'100%'}
          light={
            <Image src={THUMBNAIL_URL} alt="video for streamline sales" width={1600} height={900} />
          }
        />
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-c-heading max-w-[600px] mx-auto mt-10"
      >
        <p className="text-c-heading text-[24px] tablet:text-[32px] mb-4">
          Easy to use filters & visualize inventory
        </p>
        <p className="text-c-section-heading mb-4">
          The property offering has customized filters allowing users to quickly refine their
          search. Popular filters include: price range, number of rooms, surface area, orientation,
          and availability
        </p>
      </motion.div>
      <div className="max-w-[700px] mx-auto mt-10">
        <Image src={IMG_ONE_URL} aria-hidden={true} alt="" width={981} height={184} />
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-c-heading max-w-[600px] mx-auto mt-10"
      >
        <p className="text-c-heading text-[24px] tablet:text-[32px] mb-4">
          Rotate the build or unveil the unit
        </p>
      </motion.div>
      <div className="max-w-[700px] mx-auto mt-10 flex justify-between">
        <DynamicReactPlayer
          url={VIDEO_TWO_URL}
          playing={true}
          volume={1}
          muted={false}
          width={'48%'}
          height={'auto'}
          loop
        />
        <DynamicReactPlayer
          url={VIDEO_THREE_URL}
          playing={true}
          volume={1}
          muted={false}
          width={'48%'}
          height={'auto'}
          loop
        />
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-c-heading max-w-[600px] mx-auto mt-10"
      >
        <p className="text-c-section-heading mb-4">
          Buyers can select their preferred unit directly from the 3-dimensional model. This allows
          buyers to make an informed decision based on the actual view from the property, the
          surrounding area and the layout (which can be better experienced by removing the roof or
          level, and panning the camera over the property)
        </p>
      </motion.div>
      <div className="max-w-[700px] mx-auto mt-10 flex flex-col lg-phone:flex-row lg-phone:justify-between lg-phone:items-center">
        <div className="w-full lg-phone:w-[45%]">
          <Image src={IMG_TWO_URL} aria-hidden alt="" width={1470} height={1602} />
        </div>
        <div className="mt-10 w-full lg-phone:w-[40%]">
          <p className="text-c-heading text-[24px] lg-phone:text-[32px] mb-4">
            Buy unit is always a click away
          </p>
          <p className="text-c-section-heading mb-4">
            Buyers can pay their securing deposit by clicking the “Buy” button, which appears at
            multiple points throughout the system
          </p>
        </div>
      </div>
      <div className="max-w-[700px] mx-auto mt-10 flex flex-col-reverse lg-phone:flex-row lg-phone:justify-between lg-phone:items-center mb-10">
        <div className="mt-10 w-full lg-phone:w-[40%]">
          <p className="text-c-heading text-[24px] lg-phone:text-[32px] mb-4">
            Local and international payment methods
          </p>
          <p className="text-c-section-heading mb-4">
            Buyers can pay using a variety of payment methods to accommodate local & cross border
            sales. Furthermore, the funds go directly into the nominated account of the developer
            for complete control
          </p>
        </div>
        <div className="w-full lg-phone:w-[45%]">
          <Image src={IMG_THREE_URL} aria-hidden alt="" width={1470} height={1602} />
        </div>
      </div>
    </PopupLayout>
  );
};

export default SubsectionTwoPopup;
