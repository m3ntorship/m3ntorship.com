import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';
import Link from 'next/link';

const SponsorUs = ({ sponsersData, sponserUsData, withBtn, withIcons }) => {
  const { title, sub_title, sponsers_link } = sponserUsData;

  return (
    <section className="container">
      <div className="py-20 border border-c400 bg-c1200">
        <div className="text-c600">
          <Heading
            as="h2"
            type={HEADING_OPTIONS.TYPE.CARD_SMALL}
            textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
            fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
          >
            {title}
          </Heading>
          <div className="p-2 w-3/4 mx-auto mt-6">
            <p className="text-base text-center">{sub_title}</p>
          </div>
        </div>
        {withIcons && (
          <ul className="flex items-center justify-center  md:px-32 mx-auto flex-wrap">
            {sponsersData.map(({ id, link, logo: { url } }) => {
              return (
                <li key={id} className="mx-10 my-6">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className=" max-w-xxs inline-block"
                    href={link}
                  >
                    <img className="m-auto sponsors__logo" src={url} alt="" />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
        {withBtn && (
          <div className="mt-6">
            <Link href={sponsers_link.url}>
              <Button
                textColor="black"
                bgColor="green"
                btnSize="large"
                textSize="medium"
                customClassName="mx-auto"
              >
                {sponsers_link.name}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SponsorUs;
