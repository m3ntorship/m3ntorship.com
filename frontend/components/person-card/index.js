import React from 'react';
import cn from 'classnames';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';

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

const PersonCard = ({ cardDetails, bgColord, rounded, boxShadow }) => {
  const { card_image, title, sub_title, describe } = cardDetails;

  return (
    <>
      {cardDetails && (
        <div
          style={{ boxShadow: boxShadow && '0 0 40px rgba(0, 0, 0, 0.1)' }}
          className={cn('card h-full', 'overflow-hidden', 'px-4', 'py-8', {
            'bg-c400': bgColord,
            'text-center px-10, px-10': rounded
          })}
        >
          {card_image && (
            <div
              className={cn(
                'person__card__image',
                'mx-auto',
                'pb-4',
                'text-center',
                {
                  'w-56': !rounded
                }
              )}
            >
              <img
                src={card_image.url}
                alt="title"
                className={cn({
                  'rounded-full  max-w-none m-auto': rounded,
                  'w-20 h-20': bgColord,
                  'lg:w-48 lg:h-48 w-24 h-24': !bgColord
                })}
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
          {title && (
            <Heading
              type={HEADING_OPTIONS.TYPE.CARD}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
              className="pb-4"
            >
              {title}
            </Heading>
          )}
          {sub_title && (
            <p className="card__subtitle pb-2 text-center text-base text-c700">
              {sub_title}
            </p>
          )}

          {describe && (
            <p
              className={cn(
                'card__description',
                'text-sm',
                'pb-2',
                'font-normal',
                'my-5',
                {
                  'text-c600': !rounded,
                  'text-c800': rounded
                }
              )}
            >
              {describe}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default PersonCard;
