import React, { useContext } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import UserContext from '../../context/UserContext';
import {
  Heading,
  GradientText,
  HEADING_OPTIONS
} from '../shared/Heading/index';
import Button from '../shared/Button/index';
import SectionHeader from '../shared/SectionHeader';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(() => import('../../helper/lazy-image'), {
  ssr: false
});

const Apply = ({ data, inputFields, settings }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const router = useRouter();
  const { as } = router.query;
  if (data) {
    const { MenteeButton, MentorButton, apply_side_image } = data;
    const { mentor, setMentor } = useContext(UserContext);
    return (
      <>
        <div className="flex">
          <SectionHeader
            settings={settings}
            data={data}
            gradient_color={
              mentor || as === 'mentor'
                ? HEADING_OPTIONS.GRADIENT_COLOR.BLUE
                : HEADING_OPTIONS.GRADIENT_COLOR.GREEN
            }
            headingtype={HEADING_OPTIONS.TYPE.SECONDARY}
            headingAs="h2"
            customClassName="w-full lg:w-1/2 py-0"
          >
            {MenteeButton && MentorButton && (
              <div className="flex flex-col sm:flex-row">
                {mentor || as === 'mentor' ? (
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      setMentor(false);
                      router.push(
                        {
                          pathname: '/apply',
                          query: { as: 'mentee' }
                        },
                        '/apply',
                        { shallow: true }
                      );
                    }}
                    borderStyle="solid"
                    borderColor="black"
                    customClassName="text-c100 mr-6 mt-6 lg:mt-0 font-black"
                  >
                    {MenteeButton.text}
                  </Button>
                ) : (
                  <Button
                    bgColor={MenteeButton.textColor}
                    customClassName="mr-6 mt-6 lg:mt-0 font-black"
                    onClick={e => {
                      e.preventDefault();
                      router.push(
                        {
                          pathname: '/apply',
                          query: { as: 'mentee' }
                        },
                        '/apply',
                        { shallow: true }
                      );
                    }}
                  >
                    {MenteeButton.text}
                  </Button>
                )}
                {mentor || as === 'mentor' ? (
                  <Button
                    textColor="white"
                    bgColor={MentorButton.textColor}
                    customClassName="font-black mt-6 lg:mt-0"
                    onClick={e => {
                      e.preventDefault();
                      router.push(
                        {
                          pathname: '/apply',
                          query: { as: 'mentor' }
                        },
                        '/apply',
                        { shallow: true }
                      );
                    }}
                  >
                    {MentorButton.text}
                  </Button>
                ) : (
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      setMentor(true);
                      router.push(
                        {
                          pathname: '/apply',
                          query: { as: 'mentor' }
                        },
                        '/apply',
                        { shallow: true }
                      );
                    }}
                    borderStyle="solid"
                    borderColor={MentorButton.textColor}
                    customClassName="text-c300 font-black mt-6 lg:mt-0"
                  >
                    {MentorButton.text}
                  </Button>
                )}
              </div>
            )}
          </SectionHeader>
          <div className="mt-8 lg:w-1/2 hidden lg:block">
            {apply_side_image && (
              <LazyImage
                src={apply_side_image.url}
                className="float-right w-32"
                alt={'apply now with us'}
                loading="lazy"
              />
            )}
          </div>
        </div>
        {mentor || as === 'mentor' ? (
          <div
            ref={ref}
            style={{ height: '30rem' }}
            className="ExampleWidget mentor relative my-8"
          >
            {inView && (
              <ReactTypeformEmbed
                popup={false}
                url="https://m3ntorshipcom.typeform.com/to/F9BNbwS2"
              />
            )}
          </div>
        ) : (
          <div
            ref={ref}
            style={{ height: '30rem' }}
            className="ExampleWidget mentee relative my-8"
          >
            <div className="hidden"></div>
            {inView && (
              <ReactTypeformEmbed
                popup={false}
                url="https://m3ntorshipcom.typeform.com/to/yj7E4NEG"
              />
            )}
          </div>
        )}
      </>
    );
  }
};

export default Apply;
