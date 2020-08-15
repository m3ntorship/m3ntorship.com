import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';

const Footer = ({ data }) => {
  if (data) {
    const {
      logo,
      links,
      side_image,
      footer_about,
      copy_right,
      title_links
    } = data;

    const { title, description, url } = footer_about ? footer_about : false;
    return (
      <footer className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="my-4 md:my-0">
            {logo && (
              <h2 className="font-black mb-6 text-xxlg">
                {logo}
                {side_image && (
                  <img className="inline-block ml-6" src={side_image.url} />
                )}
              </h2>
            )}
            {copy_right && (
              <p className="text-xxs font-normal text-c700">
                {' '}
                {copy_right}
                <br /> All rights reserved.{' '}
              </p>
            )}
          </div>
          {footer_about && (
            <div className="my-4 mr-4 md:my-0">
              {title && (
                <Heading
                  type={HEADING_OPTIONS.TYPE.CARD_SMALL}
                  fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
                  as="h3"
                >
                  {title}
                </Heading>
              )}
              {description && (
                <p className=" text-xxs font-normal text-c700">
                  {description}
                  {url && (
                    <a className="underline font-bold" href={url.url}>
                      {url.name}
                    </a>
                  )}
                </p>
              )}
            </div>
          )}
          <div className="my-4 md:my-0">
            {title_links && (
              <Heading
                type={HEADING_OPTIONS.TYPE.CARD_SMALL}
                fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
                as="h3"
              >
                {title_links}
              </Heading>
            )}
            {links && (
              <ul className="flex flex-col sm:flex-row flex-wrap">
                {links.map(link => {
                  const { url, name, id } = link;
                  return (
                    <li
                      key={id}
                      className="mb-4 font-bold text-xxs underline w-1/2"
                    >
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </footer>
    );
  } else {
    return null;
  }
};

export default Footer;
