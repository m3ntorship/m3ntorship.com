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
const Apply = ({ data, inputFields }) => {
  if (data) {
    const {
      primaryHeading,
      gradiendtText,
      paragraph,
      buttons: {
        menteeButton: { menteeButtonColor, menteeButtonText },
        mentorButton: { mentorButtonColor, mentorButtonText }
      }
    } = data;
    const { mentor, setMentor } = useContext(UserContext);
    return (
      <div className="p-5">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <Heading
              type={HEADING_OPTIONS.TYPE.MAIN}
              textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
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
              {paragraph}
            </GenericParagrapgh>
            <div className="mt-8 flex flex-col md:flex-row">
              {mentor ? (
                <Button
                  onClick={e => {
                    e.preventDefault();
                    setMentor(false);
                  }}
                  borderStyle="solid"
                  borderColor={menteeButtonColor}
                  customClassName="text-c200 md:mr-6
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
              src="https://s3-alpha-sig.figma.com/img/7718/8515/e137ebf7ac9175f7efc97260dc799db1?Expires=1596412800&Signature=ZXzEM4iwW0trNUXKaP9RCesSP-xTjRAuZGa~mdEvJ9eLyJLVPrPO4CubYOAtUhM5OA20a-hrom4wm3mwkpyqBgTc8K4HiI5RqKDULsLSRoj3AS-dpHYFBQzTIBFOCVX2Df4q1YT6OOWLQ06u42BG5SmhT4NKAq3cGKCg53AFZAQqmIqV0b1K~4nk8yD3jArzMvzFUBuYsEyrHRAQD-Vro4ZBDNlx60L5IxlwthyEE3SS2tb0xDz0GeL9Z2vGCrgg4KfM2PE763CwLtVB2B9LU~C2EjEQc4dLhkoFW0N3IxYrubeQ~9P8RIJYLY8wa8VZp8AajIcxNhNNLMUFxxKLIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              className="float-right w-32"
            />
          </div>
        </div>
        <div className="mt-8">
          <Form
            inputFields={inputFields}
            sideImg="https://s3-alpha-sig.figma.com/img/2b73/7a06/63d6c70e5a3acaea8b40ac2bc166be42?Expires=1597017600&Signature=QmvpwbPGcGZwtNl8CvFkOVF~AwH2Efz1r5H5m5gOUuJDV16up3nw-NVCZcxTNSP5rH27k6WAFoNhEMeBLkYrwnQt1yEsk6J00awJO61Fa40UeOOn94lK-vNYHbmcc8tFV0Ngs1DM0~jcNwmmSNRcMuns0By9AwoMLJMVymnTGzvRmFA08IpZ85ycD1njjIXIp0AEMgMhN0T4JD4rRpk15SLkQofEEf7NW3IycczDMfCL9i~Q3TMQXcxk927t7kYqZngr0F-TPTfCD~PHYTPCStOBbrcIeD7cNPakz9kHWQZpSw0M-rzXWtQjJDPbOzuaH3JrRsn96xIgmeuv1mtVcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </div>
      </div>
    );
  }
};

export default Apply;
