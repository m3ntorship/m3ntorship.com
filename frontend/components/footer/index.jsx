import React from 'react';

const Footer = ({ data }) => {
  if (data) {
    const {
      logo,
      links,
      side_image,
      footer_about: {
        title,
        description,
        url: { url, name }
      },
      copy_right: copyrights
    } = data;
    return (
      <footer className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="my-4 md:my-0">
            <h2 className="font-black mb-6 text-xlg">
              {logo}
              <img className="inline-block ml-6" src={side_image.url} />
            </h2>
            <p className="text-xxs text-c700 leading-5">
              {' '}
              {copyrights}
              <br /> All rights reserved.{' '}
            </p>
          </div>
          <div className="my-4 mr-4 md:my-0">
            <h3 className="text-base mb-8 font-bold">{title}</h3>
            <p className="text-c700">
              {description}
              <a className="underline" href={url}>
                {name}
              </a>
            </p>
          </div>
          <div className="my-4 md:my-0">
            <h3 className="text-base mb-6 font-bold">Links</h3>
            <ul className="flex flex-wrap">
              {links.map(link => {
                const { url, name, id } = link;
                return (
                  <li
                    key={id}
                    className="mb-4 leading-7 font-bold underline w-1/2"
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    );
  } else {
    return null;
  }
};

export default Footer;
