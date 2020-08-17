import React, { useState } from 'react';
import randomPosition from '../../helper/randomPosition';
import { motion } from 'framer-motion';

export const ListOfRoundedImages = ({ data }) => {
  let cache = [];

  //animation varitants
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
        type: 'spring'
      }
    }
  };

  const positionStyle = () => {
    const position = randomPosition(95, cache);
    return {
      left: `${position.x}%`,
      bottom: `${position.y}%`
    };
  };

  return (
    <motion.div
      className="list-of-rounded-images flex flex-wrap items-center justify-center lg:block relative w-full h-full gap-5"
      variants={imageContainer}
      animate="visible"
      style={{
        placeItems: 'center'
      }}
    >
      {data &&
        data.map(({ url, title }, index) => {
          return (
            <motion.div
              key={index}
              className="static lg:absolute w-24 h-24"
              variants={image}
              initial="hidden"
              style={positionStyle()}
            >
              {console.log(cache)}
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
