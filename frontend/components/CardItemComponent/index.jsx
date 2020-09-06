import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(() => import('../../helper/lazy-image'), {
  ssr: false
});

const CardItem = ({ data }) => {
  const {
    project_overview: { summary },
    project_name,
    project_head: { link },
    project_slug,
    project_stack
  } = data;
  return (
    <div className="repo__card border py-10 px-6 xl:px-12 border-c100 h-full">
      <div className='flex justify-between flex-col h-full'>
        <div>
        {project_name && (
          <Heading
            as="h2"
            type={HEADING_OPTIONS.TYPE.CARD_SMALL}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.left}
          >
            {project_name}
          </Heading>
        )}
        {project_stack && (
          <span className="mt-6  text-c700 text-base">{project_stack}</span>
        )}
        </div>
        {summary && <p className="mt-6 text-sm">{summary}</p>}
        <div className=''>
          <div className="mt-6">
            {link && (
              <Button
                href={link.url}
                textColor="white"
                bgColor="black"
                customClassName="m-auto py-2 h-20 uppercase w-full sm:w-full"
                btnSize="large"
              >
                <span className="mr-4">
                  <LazyImage
                    className="w-8"
                    src="/static/images/github.png"
                    alt="github logo"
                  />
                </span>
                {link.name}
              </Button>
            )}
          </div>
          <div className="mt-6">
            {project_slug && (
              <Link
                href="/projects/[slug]"
                as={`/projects/${project_slug}`}
                passHref
              >
                <Button
                  textColor="black"
                  bgColor="gray"
                  customClassName="custom"
                  fontWeight="normal"
                  customClassName="underline m-auto py-4 h-20 w-full sm:w-full"
                  textSize="medium"
                  btnSize="large"
                >
                  VIEW PROJECT
                  <span className="ml-2 w-1/6">
                    <LazyImage
                      className="inline-block w-8 h-5"
                      src="/static/images/right-arrow.svg"
                      alt="right arrow"
                    />
                  </span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
