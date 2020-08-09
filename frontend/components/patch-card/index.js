import React from 'react';
import cn from 'classnames';
import { Heading } from './../shared/Heading/index';

/**
 * Props List
 * cardDetails
//  * title : requierd
//  * image or images
//  * description
//  * anchorText (view team or Apply now)
   dashed

 */

const PatchCard = ({ cardDetails, dashed }) => {
  const { title, batch_mentees, description, link } = cardDetails;
  return (
    <>
      {cardDetails && (
        <div
          className={cn('card', 'py-6', 'px-8', {
            'bg-c400': !dashed,
            'border-dashed border-4 border-black': dashed
          })}
        >
          {title && (
            <p className="card__title text-c800">
              <Heading type="card">{title}</Heading>
            </p>
          )}
          {batch_mentees && (
            <div
              className={cn(
                'card__image',
                'flex',
                'mx-auto',
                'py-4',
                'ml-0',
                'flex-wrap',
                'items-center'
              )}
            >
              {batch_mentees.map(({ id, member_info: { card_image: { url } }, name }) => (
                <img
                  key={id}
                  src={url}
                  alt={name}
                  className="rounded-full w-8 h-8 my-1"
                  style={{
                    objectFit: 'cover',
                    marginLeft: '-.5rem',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
                  }}
                />
              ))}
            </div>
          )}
          {description && (
            <p
              className={cn(
                'card__description',
                'text-xs',
                'pb-6',
                'text-c700',
                { 'my-8': dashed }
              )}
            >
              {description}
            </p>
          )}

          {link && (
            <a className="font-bold text-sm underline " href={link.url}>
              {link.name}
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default PatchCard;
