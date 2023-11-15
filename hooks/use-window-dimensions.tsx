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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const screenToVideoSizeRatio = (screenWidth: number) => {
  if(screenWidth <= 360) {
    return {
      videoRatio: 0.8,
      carouselOffset: '5vw',
      carouselElementMargin: '5vw',
      sliderOffset: 90
    };
  }

  if(screenWidth <= 768) {
    return {
      videoRatio: 0.6,
      carouselOffset: '15vw',
      carouselElementMargin: '5vw',
      sliderOffset: 70
    };
  }

  return {
    videoRatio: 0.6,
    carouselOffset: '15vw',
    carouselElementMargin: '5vw',
    sliderOffset: 70
  };
} 
