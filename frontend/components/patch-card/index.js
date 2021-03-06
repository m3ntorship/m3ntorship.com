import React from 'react';
import Link from 'next/link';

import cn from 'classnames';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(() => import('../../helper/lazy-image'), {
  ssr: false
});

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
  const { title, batch_mentees, description, link, batch_slug } = cardDetails;
  return (
    <>
      {cardDetails && (
        <div
          className={cn('card', 'p-12', 'flex', 'flex-col', 'h-full', {
            'bg-c400': !dashed,
            'border-dashed border-4 border-black': dashed
          })}
        >
          {title && (
            <Heading
              type={HEADING_OPTIONS.TYPE.CARD_SMALL}
              fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
              as="h3"
              className="card__title text-c800"
            >
              {title}
            </Heading>
          )}
          {batch_mentees && (
            <div
              className={cn(
                'card__image',
                'flex',
                'mx-auto',
                'mb-6',
                'ml-0',
                'flex-wrap',
                'items-center',
                'group'
              )}
            >
              {batch_mentees.map(
                ({
                  id,
                  member_info: {
                    card_image: { url }
                  },
                  name
                }) => (
                  <LazyImage
                    key={id}
                    src={url}
                    alt={name}
                    className="rounded-full w-12 h-12 -ml-2 transition-all shadow-btn bg-cover duration-200 ease-linear lg:group-hover:ml-0 md:group-hover:mr-1 mb-1"
                  />
                )
              )}
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
          {dashed ? (
            <Link href={link.url}>
              <a className="font-bold text-sm underline mt-auto uppercase">
                {link.name}
              </a>
            </Link>
          ) : (
            link && (
              <Link href={'/cohorts/[slug]'} as={`/cohorts/${batch_slug}`}>
                <a className="font-bold text-sm underline mt-auto uppercase">
                  {link.name}
                </a>
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
};

export default PatchCard;
