import React from 'react';
import Button from '../shared/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const TopBar = ({
  data: { logo: logo_title, sub_text: sub_title, apply_btn },
  button_color,
  bgColored
}) => {
  return (
    <section className={`text-center text-lg ${bgColored ? 'bg-c200' : ''}`}>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="container flex items-center"
      >
        {logo_title && <div className="text-md md:text-lg">{logo_title}</div>}
        {sub_title && (
          <p className="uppercase font-normal text-sm text-c500 self-end ml-4 hidden md:inline">
            {sub_title}
          </p>
        )}
        {apply_btn && (
          <Link href={apply_btn.url} passHref>
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
                bgColored ? 'shadow-btn' : ''
              }`}
              bgColor={button_color ? button_color : 'green'}
            >
              {apply_btn.name}
            </Button>
          </Link>
        )}
      </motion.div>
    </section>
  );
};
