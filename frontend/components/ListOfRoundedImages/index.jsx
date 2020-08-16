import React, { useState } from 'react';
import randomPosition from '../../helper/randomPosition';
import { motion } from 'framer-motion';

const imageContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const image = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring'
    }
  }
};

export const ListOfRoundedImages = ({ data }) => {
  let cache = [];
  return (
    <motion.div
      className="grid grid-cols-4 grid-rows-4 gap-5"
      variants={imageContainer}
      animate="visible"
      style={{
        placeItems: 'center',
        gridTemplateAreas:
          "'g1 g2 g3 g4' 'g5 g6 g7 g8' 'g9 g10 g11 g12' 'g13 g14 g15 g16'"
      }}
    >
      {data &&
        data.map(({ url }, index) => {
          return (
            <motion.div
              key={index}
              style={{ gridArea: `g${randomPosition(16, cache)}` }}
              className="w-24 h-24"
              variants={image}
              initial="hidden"
            >
              <img
                src={url}
                className="object-cover w-full h-full rounded-full"
              />
            </motion.div>
          );
        })}
    </motion.div>
  );
};
