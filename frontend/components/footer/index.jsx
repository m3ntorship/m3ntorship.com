import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMobileAnimation from '../../helper/useMobileAnimation';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(
() => import('../../helper/lazy-image'),
{ ssr: false }
);

const Footer = ({ data, settings }) => {
  if (data) {
    const {
      logo,
      links,
      side_image,
      footer_about,
      copy_right,
      title_links
    } = data;

    const componentId = 'footer';
    const animateOnMobile = useMobileAnimation(settings, componentId);
    const { title, description, url } = footer_about ? footer_about : false;
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });
    return (
      <footer ref={ref} className="container overflow-hidden">
        <motion.div
          initial={animateOnMobile && { y: 200, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : ''}
          transition={{ type: 'spring', duration: 0.5 }}
          className="grid lg:grid-cols-3 grid-cols-1"
        >
          <div className="mb-10 lg:my-0">
            {logo && (
              <Heading
                type={HEADING_OPTIONS.TYPE.CARD_SMALL}
                fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
                as="p"
                className="relative"
              >
                {logo}
                {side_image && (
                  <LazyImage
                    className="absolute inline ml-6 transform -translate-y-1"
                    src={side_image.url}
                  />
                )}
              </Heading>
            )}
            {copy_right && (
              <p className="text-xxs font-normal text-c700">
                {' '}
                {copy_right}
                <br /> All rights reserved.{' '}
              </p>
            )}
          </div>
          {footer_about && (
            <div className="mb-10 mr-4 lg:my-0">
              {title && (
                <Heading
                  type={HEADING_OPTIONS.TYPE.CARD_SMALL}
                  fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
                  as="p"
                >
                  {title}
                </Heading>
              )}
              {description && (
                <p className=" text-xxs font-normal text-c700">
                  {description}
                  {url && (
                    <Link href={url.url} passHref>
                      <a className="underline font-bold">{url.name}</a>
                    </Link>
                  )}
                </p>
              )}
            </div>
          )}
          <div className="lg:my-0">
            {title_links && (
              <Heading
                type={HEADING_OPTIONS.TYPE.CARD_SMALL}
                fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
                as="p"
              >
                {title_links}
              </Heading>
            )}
            {links && (
              <ul className="flex flex-col sm:flex-row flex-wrap">
                {links.map(link => {
                  const { url, name, id } = link;
                  return (
                    <li
                      key={id}
                      className="mb-4 last:mb-0 font-bold text-xxs underline w-1/2"
                    >
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </motion.div>
      </footer>
    );
  } else {
    return null;
  }
};

export default Footer;
