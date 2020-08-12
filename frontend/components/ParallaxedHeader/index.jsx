import React, { useEffect, useRef } from 'react';
import { Heading } from '../shared/Heading';

export const ParallaxedHeader = ({
  data: {
    title,
    sub_title,
    image: { url }
  }
}) => {
  return (
    <section className="pt-0">
      <div className="bg-c200 global-section-padding">
        <div className="container flex justify-center items-center">
          <div className="hidden lg:block mr-auto w-56">
            {url && <img src={url} />}
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
              <p className="text-base md:text-md uppercase text-center">
                {sub_title}
              </p>
            )}
          </div>
          <div className="hidden lg:block ml-auto w-56">
            {url && <img src={url} />}
          </div>
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
    </section>
  );
};
