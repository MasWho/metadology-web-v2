import React from 'react';
import PopupLayout, { BasePopupProps } from './popup-layout';

type Props = {};

const SubsectionTwoPopup = (props: Props & BasePopupProps) => {
  const { onClose } = props;
  return (
    <PopupLayout onClose={onClose}>
      {/* TODO: Testing */}
      <div className='h-[1500px] text-c-section-heading text-center text-[100px]'>Hello</div>
    </PopupLayout>
  );
};

export default SubsectionTwoPopup;
