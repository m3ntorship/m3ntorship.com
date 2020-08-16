import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ParagraphWithImageBeside = ({ data }) => {
  if (data) {
    const { title, sub_title, image } = data;
    const [ref, inView] = useInView({
      threshold: 0.5
    });
    return (
      <div className="flex justify-between items-center" ref={ref}>
        <motion.div
          className="w-full md:w-8/12"
          initial={{ x: -1000 }}
          animate={inView ? { x: 0 } : ''}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          {title && <p className="text-center mb-4 md:text-left">{title}</p>}
          {sub_title && (
            <p className="text-center  mb-4  md:text-left">{sub_title}</p>
          )}
        </motion.div>

        <motion.div
          className="w-2/12 flex-auto hidden md:flex justify-end items-center"
          initial={{ x: 500 }}
          animate={inView ? { x: 0 } : ''}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          {image && <img src={image.url} />}
        </motion.div>
      </div>
    );
  } else {
    return null;
  }
};
