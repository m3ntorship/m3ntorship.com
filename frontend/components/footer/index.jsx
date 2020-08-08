import React from 'react';

const Footer = ({ data }) => {
  const { links, footer_about: about, copyright } = data;
  if (data) {
    return (
      <footer className="mt-24 container">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="mx-4 relative my-4">
            <div className="footer__copyrights__bg absolute hidden lg:block float-right w-16 h-16"></div>
            <h2 className="font-black mb-8 text-xlg">M3ntorship</h2>
            <p className="text-xxs text-c700 leading-5">
              {' '}
              {copyright}
              <br /> All rights reserved.{' '}
            </p>
          </div>
          <div className="mx-4 my-4">
            <h3 className="text-base mb-8 font-bold">About us</h3>
            <p className="text-c700">
              {about.description.slice(0, 120).concat('... ')}
              <a className="underline" href={about.url.url}>
                {about.url.name}
              </a>
            </p>
          </div>
          <div className="mx-4 my-4">
            <h3 className="text-base mb-6 font-bold">Links</h3>
            <ul className="flex flex-col flex-wrap h-32">
              {links.map(link => {
                const { url, name } = link;
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
