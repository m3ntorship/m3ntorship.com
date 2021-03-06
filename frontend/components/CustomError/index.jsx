import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(
() => import('../../helper/lazy-image'),
{ ssr: false }
);

export default function CustomError({ statusCode }) {
  return (
    <section className="flex flex-col justify-center items-center container lg:px-64">
      <div className="overflow-hidden rounded-full w-64 h-64 bg-c200 flex justify-center items-end">
        <LazyImage
          src="/static/images/404.png"
          alt="404 Error"
          className="w-4/5 h-4/5"
        />
      </div>
      <Heading
        type={HEADING_OPTIONS.TYPE.SECTION}
        textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
        className="mt-10"
        as="h1"
      >
        {statusCode
          ? statusCode === 404
            ? '404 ...  You’re Lost!'
            : `An error ${statusCode} occurred on server`
          : 'An unexpected error'}
      </Heading>
      <p className="text-base text-c600 text-center mb-10">
        {statusCode
          ? statusCode === 404
            ? 'Please be sure of the entered page name'
            : 'We are sorry for the inconvenience'
          : 'We are sorry for the inconvenience'}
      </p>
      <Link href="/" passHref>
        <Button textColor="white" bgColor="black" customClassName="uppercase">
          Go To Home
        </Button>
      </Link>
    </section>
  );
}
