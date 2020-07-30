import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';
import Link from 'next/link';

export default function BackToHomeWithTitleAndImage({
  imageUrl,
  title,
  description,
  btn: { text: btnText, url: btnUrl }
}) {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="overflow-hidden rounded-full w-64 h-64 bg-c200">
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
      {title && (
        <Heading
          type={HEADING_OPTIONS.TYPE.SECTION}
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
          className="my-10"
        >
          {title}
        </Heading>
      )}
      {description && (
        <p className="text-base text-c600 text-center mb-8">{description}</p>
      )}
      {btnText && btnUrl && (
        <Link href={btnUrl}>
          <Button textColor="white" bgColor="black" customClassName="uppercase">
            {btnText}
          </Button>
        </Link>
      )}
    </section>
  );
}
