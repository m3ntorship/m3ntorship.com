import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import randomPosition from '../../helper/randomPosition';
import { motion, useDragControls } from 'framer-motion';
import { useEffect } from 'react';

const ListOfRoundedImages = ({ data }) => {
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
  const splash = {
    hidden: {
      x: 400,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring'
      }
    }
  };

  const positionStyle = url => {
    const position = randomPosition(140, 100, 10, cache, 1, data.length);
    return {
      left: `${position.x}%`,
      bottom: `${position.y}%`,
      cursor: 'grab',
      background: `url(${url})`,
      backgroundSize: 'cover'
    };
  };

  const constraintsRef = useRef(null);

  return (
    <motion.div
      className="list-of-rounded-images flex flex-wrap items-center justify-center lg:block relative w-full h-full gap-5"
      variants={imageContainer}
      animate="visible"
      style={{
        placeItems: 'center'
      }}
      ref={constraintsRef}
    >
      <motion.div
        variants={splash}
        initial="hidden"
        className="absolute hidden lg:block left-0"
        style={{ width: '135%', top: '-10%' }}
      >
        <img src="/static/images/splashes.png" alt="" />
      </motion.div>
      {data &&
        data.map(({ url }, index) => {
          return (
            <motion.div
              key={index}
              className="static lg:absolute w-24 h-24 rounded-full shadow-img"
              variants={image}
              initial="hidden"
              style={positionStyle(url)}
              drag
              whileTap={{ cursor: 'grabbing' }}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            ></motion.div>
          );
        })}
    </motion.div>
  );
};

export default ListOfRoundedImages;
