import React from 'react';
import { motion } from 'framer-motion';

export const ListOfRoundedImages = ({ data }) => {
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

  return (
    <motion.div
      className="flex justify-center flex-wrap"
      variants={imageContainer}
      animate="visible"
    >
      {data &&
        data.map(({ url }, index) => {
          return (
            <motion.div
              key={index}
              className="w-24 h-24 m-5 mt-3"
              variants={image}
              initial="hidden"
            >
              <img
                src={url}
                className="object-cover w-full h-full rounded-full "
              />
            </motion.div>
          );
        })}
    </motion.div>
  );
};
