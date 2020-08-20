import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';
import githubLogo from '../../public/static/images/github.png';
import rightArrow from '../../public/static/images/right-arrow.svg';
import Link from 'next/link';

const CardItem = ({ data }) => {
  const {
    project_overview: { summary },
    project_name,
    project_head: { link },
    project_slug,
    project_stack
  } = data;
  return (
    <div className="repo__card my-3 border py-10 px-6 md:px-12 border-c100">
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
        {summary && <p className="mt-6 text-sm">{summary}</p>}
        <div className="mt-6">
          {link && (
            <Button
              textColor="white"
              bgColor="black"
              customClassName="m-auto py-2"
            >
              <span className="mr-4">
                <img className="inline-block" src={githubLogo}></img>
              </span>
              <a href={link.url}>{link.name}</a>
            </Button>
          )}
        </div>
        <div className="mt-6">
          {project_slug && (
            <Button
              textColor="black"
              bgColor="gray"
              customClassName="custom"
              fontWeight="normal"
              customClassName="underline m-auto py-4"
              textSize='medium'
            >
              <Link
                href="/projects/[slug]"
                as={`/projects/${project_slug}`}
                passHref
              >
                VIEW PROJECT
              </Link>
              <span className="ml-2 w-1/6">
                <img className="inline-block w-8 h-5" src={rightArrow}></img>
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
