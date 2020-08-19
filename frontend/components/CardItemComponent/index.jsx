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
    subTitle
  } = data;
  return (
    <div className="repo__card my-3 border border-c100">
      <div className="m-12">
        {project_name && (
          <Heading
            as="h2"
            type={HEADING_OPTIONS.TYPE.CARD_SMALL}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.left}
          >
            {project_name}
          </Heading>
        )}
        {subTitle && (
          <span className="mt-6  text-c700 text-base">{subTitle}</span>
        )}
        {summary && <p className="mt-6 text-sm">{summary}</p>}
        <div className="mt-6">
          {link && (
            <Button
              textColor="white"
              bgColor="black"
              btnSize="large"
              customClassName="custom"
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
              btnSize="large"
              customClassName="custom"
              fontWeight="normal"
              customClassName="underline"
            >
              <Link
                href="/projects/[slug]"
                as={`/projects/${project_slug}`}
                passHref
              >
                VIEW PROJECT
              </Link>
              <span className="ml-4 w-1/6">
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
