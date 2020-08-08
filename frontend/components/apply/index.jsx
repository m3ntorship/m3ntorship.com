import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import {
  Heading,
  GradientText,
  HEADING_OPTIONS
} from '../shared/Heading/index';
import GenericParagrapgh from '../shared/GenericParagrapgh/index';
import Button from '../shared/Button/index';
// import Form from '../shared/form';
const Apply = ({ data }) => {
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
      <div>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <Heading
              type={HEADING_OPTIONS.TYPE.MAIN}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
            >
              {primaryHeading}{' '}
              <GradientText
                text={gradiendtText}
                gradientColor={
                  mentor
                    ? HEADING_OPTIONS.GRADIENT_COLOR.BLUE
                    : HEADING_OPTIONS.GRADIENT_COLOR.GREEN
                }
              />
            </Heading>
            <GenericParagrapgh
              textColor="gray"
              customClassName="mt-8 text-center md:text-left"
            >
              {description}
            </GenericParagrapgh>
            <div className="mt-8 flex flex-col md:flex-row">
              {mentor ? (
                <Button
                  onClick={e => {
                    e.preventDefault();
                    setMentor(false);
                  }}
                  borderStyle="solid"
                  borderColor="black"
                  customClassName="text-c100 md:mr-6
                 font-black"
                >
                  {menteeButtonText}
                </Button>
              ) : (
                <Button
                  bgColor={menteeButtonColor}
                  customClassName="md:mr-6 font-black"
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
                  customClassName="font-black mt-6 md:mt-0"
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
                  borderColor={mentorButtonColor}
                  customClassName="text-c300 font-black mt-6 md:mt-0"
                >
                  {mentorButtonText}
                </Button>
              )}
            </div>
          </div>
          <div className="mt-8 hidden md:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/7718/8515/e137ebf7ac9175f7efc97260dc799db1?Expires=1597622400&Signature=DENH6VZ94XdjV2lefh9-fdcEy13r2Axqfs5aaw2ub3C5bYia--YCfEcCdMvMuwsdI5685MpBb45h4ua0qNwi-iER0yQYZIBi~7gA6IwsSQVjVM7T2G0MLFfEol~RVFZAkCcDk~sE~4fE1COLh7-45FS4GdqoqBFfThJPrPKnfFlFuq0BzfxFKA0gGfU2bR6A8ePQOwFxb84yusJLxiqr62vSYh0xEFWAu4kL84iCD3uhh3d1sFXOAM8AT5tupjj6hRQ3F4Sk~65CVu3QAOXERYzMslJKSsVXd4~qytRJHscggV2PRC7ctCPc7LkXeo95LVZx7DL7aXqRqXyXv-cA7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              className="float-right w-32"
            />
          </div>
        </div>
        {/* <div className="mt-8">
          <Form
            inputFields={inputFields}
            sideImg="https://s3-alpha-sig.figma.com/img/2b73/7a06/63d6c70e5a3acaea8b40ac2bc166be42?Expires=1597017600&Signature=QmvpwbPGcGZwtNl8CvFkOVF~AwH2Efz1r5H5m5gOUuJDV16up3nw-NVCZcxTNSP5rH27k6WAFoNhEMeBLkYrwnQt1yEsk6J00awJO61Fa40UeOOn94lK-vNYHbmcc8tFV0Ngs1DM0~jcNwmmSNRcMuns0By9AwoMLJMVymnTGzvRmFA08IpZ85ycD1njjIXIp0AEMgMhN0T4JD4rRpk15SLkQofEEf7NW3IycczDMfCL9i~Q3TMQXcxk927t7kYqZngr0F-TPTfCD~PHYTPCStOBbrcIeD7cNPakz9kHWQZpSw0M-rzXWtQjJDPbOzuaH3JrRsn96xIgmeuv1mtVcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </div> */}
      </div>
    );
  }
};

export default Apply;
