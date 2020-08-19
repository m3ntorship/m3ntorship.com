import React, { useState, useEffect } from 'react';
import Button from '../shared/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useAnimation
} from 'framer-motion';
import useMedia from '../../helper/useMedia';
export const TopBar = ({ data, button_color, bgColored }) => {
  const {
    logo_link: { url: logo_url, name: logo_name },
    sub_text: sub_title,
    apply_btn: { url: apply_btn_url, name: apply_btn_name }
  } = data;
  const navAnimation = useAnimation();
  const [lastYPos, setLastYPos] = useState(0);
  const [stickyMenu, setStickyMenu] = useState(false);
  const router = useRouter();
  const isDesktop = useMedia(['(max-width: 1024px)'], [false], true);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScollingUp = lastYPos > yPos;
      if (isScollingUp) {
        setStickyMenu(true);
        navAnimation.start({ y: 0, opacity: 1 });
      } else {
        setStickyMenu(false);
        navAnimation.start({ y: -50 });
      }

      console.log(yPos, lastYPos);
      setLastYPos(yPos);
      if (yPos == 0) {
        setStickyMenu(false);
      }
    };
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);

  const navMenuListVariants = {
    initial: {
      opacity: 0,
      height: 0
    },
    animate: {
      opacity: 1,
      height: 'auto',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: 'afterChildren'
      }
    }
  };

  const navMenuItemVariants = {
    initial: {
      opacity: 0,
      y: -15
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -15
    }
  };

  const burgerSvg = (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 30 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.62915 21.3679H28.2958M1.62915 1.36792H28.2958H1.62915ZM1.62915 11.3679H28.2958H1.62915Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const xCircleSvg = (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14L12 12L10 14ZM12 12L14 10L12 12ZM12 12L10 10L12 12ZM12 12L14 14L12 12ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const navlinks = [
    {
      url: '/',
      name: 'home'
    },
    {
      url: '/apply',
      name: 'apply'
    },
    {
      url: '/apply',
      name: 'apply'
    }
  ];

  const NavLink = ({ url, name, active, mobile }) => {
    return (
      <Link href={active ? '#' : url}>
        <a>
          <div
            className={cn(
              'flex',
              'flex-row',
              'capitalize',
              mobile ? '' : 'duration-100 transform hover:-translate-y-1'
            )}
          >
            <p
              className={cn(
                mobile ? 'text-sm' : 'text-xxs font-black',
                active ? 'text-c100' : 'text-c1300'
              )}
            >
              {name}
            </p>
            {active && mobile && (
              <hr className="border-c200 w-full my-auto border-1 ml-4" />
            )}
          </div>
        </a>
      </Link>
    );
  };

  return (
    <motion.header
      animate={navAnimation}
      transition={{ duration: 0.5 }}
      className={cn(
        stickyMenu ? 'md:py-4 lg:py-8' : 'pt-10 md:py-10 lg:py-16',
        menu ? '' : 'pb-10',
        'z-10',
        'top-0',
        'w-full',
        'bg-c000',
        'text-center',
        'text-lg',
        bgColored ? 'bg-c200' : '',
        stickyMenu ? 'fixed shadow-2xl' : ''
      )}
    >
      <AnimateSharedLayout>
        <div className="container flex md:flex-row flex-col items-center">
          <div className="flex md:flex-col flex-row flex-wrap w-full md:w-auto">
            {logo_url && (
              <Link href={logo_url}>
                <a className="text-md lg:text-lg font-black">{logo_name}</a>
              </Link>
            )}
            {sub_title && isDesktop && (
              <p className="font-normal text-xxs lg:text-xs mt-2 text-c500  hidden md:block">
                {sub_title}
              </p>
            )}
            <div className="ml-auto pr-4">
              {menu ? (
                <motion.button
                  layoutId="menu-button"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }}
                  className="w-10 h-10 block md:hidden"
                  onClick={() => setMenu(!menu)}
                >
                  {xCircleSvg}
                </motion.button>
              ) : (
                <motion.button
                  layoutId="menu-button"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }}
                  className="w-10 h-10 block md:hidden"
                  onClick={() => setMenu(!menu)}
                >
                  {burgerSvg}
                </motion.button>
              )}
            </div>
          </div>
          <AnimatePresence>
            {menu && (
              <nav className="flex flex-col items-baseline w-full md:hidden">
                <motion.ul
                  className="flex flex-col w-full items-baseline pl-2"
                  variants={navMenuListVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {navlinks.map(nav => {
                    const { url, name } = nav;
                    return (
                      <motion.li
                        className="my-4 lg:my-10 w-full"
                        variants={navMenuItemVariants}
                        whileHover={{ x: 15 }}
                      >
                        <NavLink
                          url={url}
                          name={name}
                          active={router.pathname === url ? true : false}
                          mobile={true}
                        />
                      </motion.li>
                    );
                  })}
                  {apply_btn_url && (
                    <motion.li
                      variants={navMenuItemVariants}
                      className="w-full"
                    >
                      <Link href={apply_btn_url} passHref>
                        <Button
                          btnSize={'medium'}
                          textSize={'medium'}
                          textColor={
                            button_color
                              ? button_color === 'blue'
                                ? 'white'
                                : 'black'
                              : 'black'
                          }
                          customClassName={`my-5 md:my-10 w-full uppercase top-bar-btn ${
                            bgColored ? 'shadow-btn' : ''
                          }`}
                          bgColor={button_color ? button_color : 'green'}
                        >
                          {apply_btn_name}
                        </Button>
                      </Link>
                    </motion.li>
                  )}
                </motion.ul>
              </nav>
            )}
          </AnimatePresence>
          <nav className="ml-auto hidden flex-row md:flex">
            <ul className="flex flex-row items-center">
              {navlinks.map(nav => {
                const { url, name } = nav;
                return (
                  <li
                    className="mx-4 lg:mx-5 w-full"
                    variants={navMenuItemVariants}
                  >
                    <NavLink
                      url={url}
                      name={name}
                      active={router.pathname === url ? true : false}
                    />
                  </li>
                );
              })}
            </ul>
            {apply_btn_url && (
              <Link href={apply_btn_url} passHref>
                <Button
                  btnSize={'small'}
                  textSize={'small'}
                  textColor={
                    button_color
                      ? button_color === 'blue'
                        ? 'white'
                        : 'black'
                      : 'black'
                  }
                  customClassName={`mx-10 uppercase top-bar-btn ${
                    bgColored ? 'shadow-btn' : ''
                  }`}
                  bgColor={button_color ? button_color : 'green'}
                >
                  {apply_btn_name}
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </AnimateSharedLayout>

      {/* // <AnimateSharedLayout>
        //   <div className="container flex items-baseline flex-wrap flex-col">
        //     <div className="flex flex-row flex-wrap w-full">
        //       {logo_url && (
        //         <Link href={logo_url}>
        //           <a className="text-md lg:text-lg font-black">{logo_name}</a>
        //         </Link>
        //       )}

        //       <div className="ml-auto pr-4">
        //         {menu ? (
        //           <motion.button
        //             layoutId="menu-button"
        //             initial={{ opacity: 0.5 }}
        //             animate={{ opacity: 1 }}
        //             transition={{
        //               type: 'spring',
        //               stiffness: 500,
        //               damping: 30
        //             }}
        //             className="w-10 h-10"
        //             onClick={() => setMenu(!menu)}
        //           >
        //             {xCircleSvg}
        //           </motion.button>
        //         ) : (
        //           <motion.button
        //             layoutId="menu-button"
        //             initial={{ opacity: 0.5 }}
        //             animate={{ opacity: 1 }}
        //             transition={{
        //               type: 'spring',
        //               stiffness: 500,
        //               damping: 30
        //             }}
        //             className="w-10 h-10"
        //             onClick={() => setMenu(!menu)}
        //           >
        //             {burgerSvg}
        //           </motion.button>
        //         )}
        //       </div>
        //     </div>
        //     <AnimatePresence>
        //       {menu && (
        //         <div className="flex flex-col items-baseline w-full">
        //           <motion.ul
        //             className="flex flex-col w-full items-baseline pl-2"
        //             variants={navMenuListVariants}
        //             initial="initial"
        //             animate="animate"
        //             exit="exit"
        //           >
        //             {navlinks.map(nav => {
        //               const { url, name } = nav;
        //               return (
        //                 <motion.li
        //                   className="my-4 lg:my-10 w-full"
        //                   variants={navMenuItemVariants}
        //                 >
        //                   <NavLink
        //                     url={url}
        //                     name={name}
        //                     active={router.pathname === url ? true : false}
        //                     mobile={true}
        //                   />
        //                 </motion.li>
        //               );
        //             })}
        //             {apply_btn_url && (
        //               <motion.li
        //                 variants={navMenuItemVariants}
        //                 className="w-full"
        //               >
        //                 <Link href={apply_btn_url} passHref>
        //                   <Button
        //                     btnSize={isDesktop ? 'medium' : 'small'}
        //                     textSize={isDesktop ? 'medium' : 'small'}
        //                     textColor={
        //                       button_color
        //                         ? button_color === 'blue'
        //                           ? 'white'
        //                           : 'black'
        //                         : 'black'
        //                     }
        //                     customClassName={`my-10 w-full uppercase top-bar-btn ${
        //                       bgColored ? 'shadow-btn' : ''
        //                     }`}
        //                     bgColor={button_color ? button_color : 'green'}
        //                   >
        //                     {apply_btn_name}
        //                   </Button>
        //                 </Link>
        //               </motion.li>
        //             )}
        //           </motion.ul>
        //         </div>
        //       )}
        //     </AnimatePresence>
        //   </div>
        // </AnimateSharedLayout> */}
    </motion.header>
  );
};
