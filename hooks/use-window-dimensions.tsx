import { TABLET_SCREEN_SIZE } from '@/components/carousel/constants';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  let width, height;
  if (typeof window !== 'undefined') {
    const { innerWidth, innerHeight } = window;
    width = innerWidth;
    height = innerHeight;
  }
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    setWindowDimensions(getWindowDimensions());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const screenToVideoSizeRatio = (screenWidth: number) => {
  if(screenWidth < TABLET_SCREEN_SIZE) {
    return {
      videoRatio: 0.9,
      carouselOffset: '2.5vw',
      carouselElementMargin: '2.5vw',
      sliderOffset: 95
    };
  }

  return {
    videoRatio: 0.6,
    carouselOffset: '15vw',
    carouselElementMargin: '5vw',
    sliderOffset: 70
  };
} 

export const carouselVideoSizeRatio = (screenWidth: number) => {
  if(screenWidth < TABLET_SCREEN_SIZE) {
    return {
      videoRatio: 0.9,
      carouselOffset: '2.5vw',
      carouselElementMargin: '2.5vw',
      sliderOffset: 95
    };
  }

  return {
    videoRatio: 0.5,
    carouselOffset: '20vw',
    carouselElementMargin: '5vw',
    sliderOffset: 60
  };
}
