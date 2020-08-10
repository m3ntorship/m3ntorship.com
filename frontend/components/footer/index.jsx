import React from 'react';

const Footer = ({ data }) => {
  if (data) {
    const {
      logo,
      links,
      footer_about: {
        title,
        description,
        url: { url, name }
      },
      copy_right: copyrights
    } = data;
    return (
      <footer className="mt-24 container">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="mx-4 relative my-4">
            <div className="footer__copyrights__bg absolute hidden lg:block float-right w-16 h-16"></div>
            <h2 className="font-black mb-8 text-xlg">{logo}</h2>
            <p className="text-xxs text-c700 leading-5">
              {' '}
              {copyrights}
              <br /> All rights reserved.{' '}
            </p>
          </div>
          <div className="mx-4 my-4">
            <h3 className="text-base mb-8 font-bold">{title}</h3>
            <p className="text-c700">
              {description}
              <a className="underline" href={url}>
                {name}
              </a>
            </p>
          </div>
          <div className="mx-4 my-4">
            <h3 className="text-base mb-6 font-bold">Links</h3>
            <ul className="flex flex-col flex-wrap h-32">
              {links.map(link => {
                const { url, underline, name } = link;
                return (
                  <li className="mb-4 leading-7 underline">
                    <a href={url}>{name}</a>
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
