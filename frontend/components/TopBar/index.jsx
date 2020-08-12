import React from 'react';
import Button from '../shared/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';
export const TopBar = ({
  data: {
    logo: logo_title,
    sub_text: sub_title,
    apply_btn: { url: link_url, name: link_text }
  },
  button_color
}) => {
  let router = useRouter();
  let pageRouter = router.pathname;
  return (
    <section className={`${pageRouter === '/about' ? 'bg-c200' : ''}`}>
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
                btnSize="medium"
                textSize="medium"
                textColor={
                  button_color
                    ? button_color === 'blue'
                      ? 'white'
                      : 'black'
                    : 'black'
                }
                customClassName={`ml-auto uppercase top-bar-btn ${
                  pageRouter === '/about' ? 'shadow-btn' : ''
                }`}
                bgColor={button_color ? button_color : 'green'}
              >
                {link_text}
              </Button>
            )}
          </Link>
        )}
      </div>
    </section>
  );
};
