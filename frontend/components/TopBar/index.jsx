import React from 'react';
import Button from '../shared/Button';
import Link from 'next/link';
export const TopBar = ({
  data: {
    logo_title,
    sub_title,
    link: { link_url, link_text }
  },
  background_color,
  button_color,
  button_shadow
}) => {
  return (
    <div class={`py-8 md:py-16 ${background_color ? 'bg-c200' : ''}`}>
      <div className="container flex items-center">
        {logo_title && <div className="text-md md:text-lg">{logo_title}</div>}
        {sub_title && (
          <p className="uppercase text-sm text-c500 self-end ml-4 hidden md:inline">
            {sub_title}
          </p>
        )}
        {link_url && (
          <Link href={link_url}>
            {link_text && (
              <Button
                textSize="medium"
                customClassName={`ml-auto uppercase top-bar-btn ${
                  button_shadow ? 'shadow-btn' : ''
                }`}
                bgColor={button_color ? button_color : 'green'}
              >
                {link_text}
              </Button>
            )}
          </Link>
        )}
      </div>
    </div>
  );
};
