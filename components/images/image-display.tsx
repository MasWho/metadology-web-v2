import Image from 'next/image';
import React from 'react';

type Props = {
  images: { url: string }[];
  reverse?: boolean;
};

const ImageDisplay = (props: Props) => {
  const { images, reverse } = props;
  return (
    <div
      className="max-w-[400px] mx-auto flex flex-col justify-between items-center mt-[20px] tablet:max-w-[700px] tablet:mt-[30px]"
      style={{
        flexDirection: reverse ? 'column-reverse' : 'column'
      }}
    >
      <div className="relative w-[100%] max-h-[270px]">
        <Image
          src={images[0].url}
          alt="explore image"
          width={720}
          height={270}
        />
      </div>
      <div className="flex w-[100%] justify-between mt-[5px]">
        <div className="relative w-[49%] max-h-[500px]">
          <Image
            src={images[1].url}
            alt="explore image"
            width={500}
            height={500}
          />
        </div>
        <div className="relative w-[49%] max-h-[500px]">
          <Image
            src={images[2].url}
            alt="explore image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
