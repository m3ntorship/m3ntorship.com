import React from 'react';
import '../../styles/footer.css';

const Footer = ({ data }) => {
  const { links, about, copyrights } = data;
  if (data) {
    return (
      <footer>
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="mx-4 relative my-4">
            <div className="footer__copyrights__bg absolute hidden lg:block float-right w-16 h-16"></div>
            <h2 className="font-black mb-8 text-xlg">M3ntorship</h2>
            <p className="text-xxs text-c700 leading-5">
              {' '}
              {copyrights}
              <br /> All rights reserved.{' '}
            </p>
          </div>
          <div className="mx-4 my-4">
            <h3 className="text-base mb-8 font-bold">About us</h3>
            <p className="text-c700">
              {about.text.slice(0, 120).concat('... ')}
              <a className="underline" href={about.url}>
                Read More
              </a>
            </p>
          </div>
          <div className="mx-4 my-4">
            <h3 className="text-base mb-6 font-bold">Links</h3>
            <ul className="flex flex-col flex-wrap h-32">
              {links.map(link => {
                if (link.underline) {
                  return (
                    <li className="mb-4 leading-7 underline">
                      <a href={link.url}>{link.text}</a>
                    </li>
                  );
                } else {
                  return (
                    <li className="mb-4 leading-7">
                      <a href={link.url}>{link.text}</a>
                    </li>
                  );
                }
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
