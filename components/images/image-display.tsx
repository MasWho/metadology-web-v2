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
      className="h-[300px] max-w-[400px] mx-auto flex flex-col justify-between items-center mt-[20px] tablet:max-w-[700px] tablet:h-[400px] tablet:mt-[30px] laptop:h-[550px]"
      style={{
        flexDirection: reverse ? 'column-reverse' : 'column'
      }}
    >
      <div className="relative w-[100%] h-[49%]">
        <Image
          src={images[0].url}
          alt="explore image"
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes='700px, 270px'
        />
      </div>
      <div className="flex w-[100%] h-[49%] justify-between mt-[5px]">
        <div className="relative w-[49%] h-[100%]">
          <Image
            src={images[1].url}
            alt="explore image"
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes='300px, 300pxpx'
          />
        </div>
        <div className="relative w-[49%] h-[100%]">
          <Image
            src={images[2].url}
            alt="explore image"
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes='300px, 300px'
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
