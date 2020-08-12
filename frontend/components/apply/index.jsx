import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import {
  Heading,
  GradientText,
  HEADING_OPTIONS
} from '../shared/Heading/index';
import GenericParagrapgh from '../shared/GenericParagrapgh/index';
import Button from '../shared/Button/index';
import Form from '../shared/form';
import SectionHeader from '../shared/SectionHeader';
const Apply = ({ data, inputFields }) => {
  if (data) {
    const {
      heading: primaryHeading,
      gradiendtText,
      description,

      MenteeButton: [{ textColor: menteeButtonColor, text: menteeButtonText }],
      MentorButton: [{ textColor: mentorButtonColor, text: mentorButtonText }]
    } = data;
    const { mentor, setMentor } = useContext(UserContext);
    return (
      <div className="flex">
        <SectionHeader
          data={data}
          gradient_color={
            mentor
              ? HEADING_OPTIONS.GRADIENT_COLOR.BLUE
              : HEADING_OPTIONS.GRADIENT_COLOR.GREEN
          }
          headingtype={HEADING_OPTIONS.TYPE.SECONDARY}
          headingAs="h2"
          customClassName="w-full lg:w-1/2 py-0"
        >
          <div className="flex flex-col sm:flex-row">
            {mentor ? (
              <Button
                onClick={e => {
                  e.preventDefault();
                  setMentor(false);
                }}
                borderStyle="solid"
                borderColor="black"
                btnSize="small"
                customClassName="text-c100 lg:mr-6
                 font-black"
              >
                {menteeButtonText}
              </Button>
            ) : (
              <Button
                bgColor={menteeButtonColor}
                btnSize="small"
                customClassName="mr-6 mt-6 lg:mt-0 font-black"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                {menteeButtonText}
              </Button>
            )}
            {mentor ? (
              <Button
                textColor="white"
                bgColor={mentorButtonColor}
                btnSize="small"
                customClassName="font-black mt-6 lg:mt-0"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                {mentorButtonText}
              </Button>
            ) : (
              <Button
                onClick={e => {
                  e.preventDefault();
                  setMentor(true);
                }}
                borderStyle="solid"
                btnSize="small"
                borderColor={mentorButtonColor}
                customClassName="text-c300 font-black mt-6 lg:mt-0"
              >
                {mentorButtonText}
              </Button>
            )}
          </div>
        </SectionHeader>
        <div className="mt-8 lg:w-1/2 hidden lg:block">
          <img
            src="https://s3-alpha-sig.figma.com/img/7718/8515/e137ebf7ac9175f7efc97260dc799db1?Expires=1597622400&Signature=DENH6VZ94XdjV2lefh9-fdcEy13r2Axqfs5aaw2ub3C5bYia--YCfEcCdMvMuwsdI5685MpBb45h4ua0qNwi-iER0yQYZIBi~7gA6IwsSQVjVM7T2G0MLFfEol~RVFZAkCcDk~sE~4fE1COLh7-45FS4GdqoqBFfThJPrPKnfFlFuq0BzfxFKA0gGfU2bR6A8ePQOwFxb84yusJLxiqr62vSYh0xEFWAu4kL84iCD3uhh3d1sFXOAM8AT5tupjj6hRQ3F4Sk~65CVu3QAOXERYzMslJKSsVXd4~qytRJHscggV2PRC7ctCPc7LkXeo95LVZx7DL7aXqRqXyXv-cA7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            className="float-right w-32"
          />
        </div>
      </div>
    );
  }
};

export default Apply;
