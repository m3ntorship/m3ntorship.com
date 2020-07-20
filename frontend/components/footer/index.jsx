import React from 'react';
import './footer.css';

const Footer = ({ data }) => {
  const { links, about, copyrights } = data;
  return (
    <footer className="p-10">
      <div className="grid grid-cols-3">
        <div className="mx-4 relative">
          <div className="footer__copyrights__bg absolute xl:block float-right w-16 h-16"></div>
          <h2 className="font-bold mb-8 text-lg">M3ntorship</h2>
          <p className="text-xxs text-c700 leading-5"> {copyrights}<br/> All rights reserved. </p>
        </div>
        <div className="mx-4">
          <h3 className="text-base mb-8 font-bold">About us</h3>
          <p className='text-c700'>
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
                <li className="mb-4 leading-7">
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
