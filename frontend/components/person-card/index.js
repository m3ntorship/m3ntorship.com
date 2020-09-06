import React from 'react';
import cn from 'classnames';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import useMedia from '../../helper/useMedia';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import useMobileAnimation from '../../helper/useMobileAnimation';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(() => import('../../helper/lazy-image'), {
  ssr: false
});

// props list

/**
 * cardDetails
 *  // card_image
 *  // title
 *  // sub_title
 *  // describe
 *
 * bgColord
 * rounded
 * boxShadow
 */

const cardVariants = {
  scale: {
    opacity: 0,
    scale: 0.2
  },
  unScale: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring'
    }
  }
};

const PersonCard = ({
  cardDetails,
  bgColord,
  bgColor,
  rounded,
  roundedSmall,
  boxShadow,
  isImageFull,
  settings
}) => {
  const componentId = 'person_card';
  const animateOnMobile = useMobileAnimation(settings, componentId);
  const { card_image, title, sub_title, describe } = cardDetails;
  const [crdRef, cardInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const isMobile = useMedia(['(min-width: 1025px)'], [false], true);

  return (
    <div ref={crdRef} className="h-full">
      {cardDetails && (
        <motion.div
          variants={animateOnMobile && cardVariants}
          initial={isMobile ? 'scale' : ''}
          animate={isMobile && cardInView ? 'unScale' : ''}
          className={cn('card h-full', 'overflow-hidden', 'p-10', {
            'bg-c400': bgColord && bgColor !== 'blue',
            'bg-c1300': bgColor === 'blue',
            'text-center p-12': rounded,
            'shadow-card': boxShadow
          })}
        >
          {card_image && (
            <div
              className={cn(
                'person__card__image',
                'mx-auto',
                'mb-8',
                'text-center'
              )}
            >
              <LazyImage
                src={card_image.url}
                alt={title}
                className={cn('object-contain mx-auto', {
                  'rounded-full': rounded,
                  'w-24 h-24': bgColord,
                  'lg:w-48 lg:h-48 w-32 h-32': !bgColord && !isImageFull,
                  'w-full h-auto': isImageFull
                })}
              />
            </div>
          )}
          {title && (
            <Heading
              type={
                rounded
                  ? roundedSmall
                    ? HEADING_OPTIONS.TYPE.CARD_SMALL
                    : HEADING_OPTIONS.TYPE.CARD
                  : HEADING_OPTIONS.TYPE.CARD_SMALL
              }
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
              fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
              as="h3"
            >
              {title}
            </Heading>
          )}
          {sub_title && (
            <p
              className={`card__subtitle mb-5 text-center ${
                roundedSmall ? 'text-sm' : 'text-base'
              } font-normal text-c600`}
            >
              {sub_title}
            </p>
          )}

          {describe && (
            <p
              className={cn('card__description', 'text-sm', 'font-normal', {
                'text-c600': !rounded,
                'text-c800': rounded
              })}
            >
              {describe}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default PersonCard;
