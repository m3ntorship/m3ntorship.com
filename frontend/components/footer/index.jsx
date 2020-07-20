import React from 'react';
import './footer.css';

const Footer = ({ data }) => {
  const { links, about, copyrights } = data;
  return (
    <footer className="p-10">
      <div className="grid grid-cols-3">
        <div className="mx-4 relative">
          <div className="footer__copyrights__bg xl:block float-right"></div>
          <h2 className="font-bold mb-6 text-lg">M3ntorship</h2>
          <p className="text-xxs">{copyrights}</p>
        </div>
        <div className="mx-4">
          <h3 className="text-base mb-6 font-bold">About us</h3>
          <p>
            {about.text}{' '}
            <a className="underline" href={about.url}>
              Read More
            </a>
          </p>
        </div>
        <div className="mx-4">
          <h3 className="text-base mb-6 font-bold">Links</h3>
          <ul className="flex flex-col flex-wrap h-32">
            {links.map(link => {
              return (
                <li className="my-4">
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
