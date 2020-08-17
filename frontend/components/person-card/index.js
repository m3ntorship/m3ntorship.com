import React from 'react';
import cn from 'classnames';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import useMedia from '../../helper/useMedia';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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

const cardVaruants = {
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
  rounded,
  roundedSmall,
  boxShadow
}) => {
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
          variants={cardVaruants}
          initial={isMobile ? 'scale' : ''}
          animate={isMobile && cardInView ? 'unScale' : ''}
          className={cn('card h-full', 'overflow-hidden', 'p-10', {
            'bg-c400': bgColord,
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
                'text-center',
                {
                  'w-56': !rounded
                }
              )}
            >
              <img
                src={card_image.url}
                alt={title}
                className={cn('object-cover mx-auto', {
                  'rounded-full': rounded,
                  'w-24 h-24': bgColord,
                  'lg:w-48 lg:h-48 w-32 h-32': !bgColord
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
