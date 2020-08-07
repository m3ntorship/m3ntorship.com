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
  const {link : {url,name},BatchInfo : {title,describe} ,images} = cardDetails;
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
          {images && (
            <div
              className={cn(
                'card__image',
                'flex',
                'mx-auto',
                'py-4',
                'flex-wrap',
                'items-center'
              )}
            >
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="title"
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
          {describe && (
            <p
              className={cn(
                'card__description',
                'text-xs',
                'pb-6',
                'text-c700',
                { 'my-8': dashed }
              )}
            >
              {describe}
            </p>
          )}

          {url && (
            <a className="font-bold text-sm underline " href={url}>
              {name}
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default PatchCard;
