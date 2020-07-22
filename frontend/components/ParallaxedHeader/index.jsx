import React, { useEffect, useRef } from 'react';
import { Heading } from '../shared/Heading';
import { useSpring, animated as a, interpolate } from 'react-spring';

export const ParallaxedHeader = ({ data: { title, sub_title, imgUrl } }) => {
  const ref = useRef();

  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
  const calc = o => `translateY(${-o * 0.2}px)`;

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div style={{ height: '1000px', background: 'red', overflow: 'hidden' }}>
      <div className="bg-c200 py-32 lg:py-12">
        <div ref={ref}>
          <a.div
            className="container flex justify-center items-center"
            style={{ transform: offset.interpolate(calc) }}
          >
            <div className="hidden lg:block mr-auto w-56">
              {imgUrl && <img src={imgUrl} />}
            </div>
            <div className="flex flex-col justify-center items-center mx-10">
              {title && (
                <Heading
                  type="mainLarge"
                  textAlign="center"
                  textTransform="uppercase"
                >
                  {title}
                </Heading>
              )}
              {sub_title && (
                <p className="text-base md:text-md uppercase mt-4 text-center">
                  {sub_title}
                </p>
              )}
            </div>
            <div className="hidden lg:block ml-auto w-56">
              {imgUrl && <img src={imgUrl} />}
            </div>
          </a.div>
        </div>
      </div>
      <div className="text-c200">
        {' '}
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-current"
        >
          {' '}
          <path
            d="M0 0v7.23c0 58.29 268.63 105.54 600 105.54s600-47.25 600-105.54V0z"
            className="shape-fill"
          ></path>{' '}
        </svg>{' '}
      </div>
    </div>
  );
};
