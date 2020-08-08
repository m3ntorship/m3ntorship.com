import React from 'react';
import Button from '../shared/Button';
import Link from 'next/link';
export const TopBar = ({
  data: {
    logo,
    sub_text,
    apply_btn: { url, name }
  },
  background_color,
  button_color,
  button_shadow
}) => {
  return (
    <div className={`py-8 md:py-16 ${background_color ? 'bg-c200' : ''}`}>
      <div className="container flex items-center">
        {logo && <div className="text-md md:text-lg">{logo}</div>}
        {sub_text && (
          <p className="uppercase text-sm text-c500 self-end ml-4 hidden md:inline">
            {sub_text}
          </p>
        )}
        {url && (
          <Link href={url}>
            {name && (
              <Button
                textSize="medium"
                textColor={button_color === 'blue' ? 'white' : 'black'}
                customClassName={`ml-auto uppercase top-bar-btn ${
                  button_shadow ? 'shadow-btn' : ''
                }`}
                bgColor={button_color ? button_color : 'green'}
              >
                {name}
              </Button>
            )}
          </Link>
        )}
      </div>
    </div>
  );
};
