import React from 'react';
import cn from 'classnames';
import {Heading, HEADING_OPTIONS} from '../shared/Heading'

// props list

/**
 * cardDetails
 *  // image
 *  // title
 *  // subtitle
 *  // description
 *
 * bgColord
 * rounded
 * boxShadow
 */

const PersonCard = ({ cardDetails, bgColord, rounded, boxShadow }) => {
  const { image, title, subtitle, description } = cardDetails;

  return (
    <>
      {cardDetails && (
        <div
          style={{ boxShadow: boxShadow && '0 0 40px rgba(0, 0, 0, 0.1)' }}
          className={cn('card', 'overflow-hidden', 'px-4', 'py-8', {
            'bg-c400': bgColord,
            'text-center px-10, px-10': rounded
          })}
        >
          {image && (
            <div
              className={cn('person__card__image', 'mx-auto', 'pb-4', 'text-center', {
                'w-56': !rounded,
                'w-32': rounded
              })}
            >
              <img
                src={image}
                alt="title"
                className={cn({ 'rounded-full w-20 h-20 max-w-none m-auto': rounded })}
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
          {title && (
            <Heading type={HEADING_OPTIONS.TYPE.CARD} textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER} className='pb-4'>
              {title}
            </Heading>
          )}
          {subtitle && (
            <p className="card__subtitle pb-2 text-center text-base text-c700">
              {subtitle}
            </p>
          )}

          {description && (
            <p
              className={cn('card__description', 'text-sm', 'pb-2', 'font-normal', 'my-5', {
                'text-c600': !rounded,
                'text-c800': rounded
              })}
            >
              {description}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default PersonCard;
