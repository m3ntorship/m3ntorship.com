import React, { useState } from 'react';
import { Heading, GradientText } from '../shared/Heading/index';
import GenericParagrapgh from '../shared/GenericParagrapgh/index';
import Button from '../shared/Button/index';
import M3Form from '../shared/form';
const Apply = () => {
  const [mentor, setMentor] = useState(false);
  return (
    <div className="p-5 grid grid-rows-2">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Heading>
            You Want to{' '}
            <GradientText
              text="Apply As"
              gradientColor={mentor ? 'blue' : 'green'}
            />
          </Heading>
          <GenericParagrapgh textColor="gray" customClassName="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.
          </GenericParagrapgh>

          <div className="mt-8">
            {mentor ? (
              <Button
                onClick={e => {
                  e.preventDefault();
                  setMentor(false);
                }}
                borderStyle="solid"
                borderColor="green"
                customClassName="text-c200 mr-6
                 font-black"
              >
                Member
              </Button>
            ) : (
              <Button
                bgColor="green"
                customClassName="mr-6 font-black"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                Member
              </Button>
            )}
            {mentor ? (
              <Button
                bgColor="blue"
                customClassName="font-black"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                Mentor
              </Button>
            ) : (
              <Button
                onClick={e => {
                  e.preventDefault();
                  setMentor(true);
                }}
                borderStyle="solid"
                borderColor="blue"
                customClassName="text-c300 font-black"
              >
                Mentor
              </Button>
            )}
          </div>
        </div>
        <div className="mt-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/7718/8515/e137ebf7ac9175f7efc97260dc799db1?Expires=1596412800&Signature=ZXzEM4iwW0trNUXKaP9RCesSP-xTjRAuZGa~mdEvJ9eLyJLVPrPO4CubYOAtUhM5OA20a-hrom4wm3mwkpyqBgTc8K4HiI5RqKDULsLSRoj3AS-dpHYFBQzTIBFOCVX2Df4q1YT6OOWLQ06u42BG5SmhT4NKAq3cGKCg53AFZAQqmIqV0b1K~4nk8yD3jArzMvzFUBuYsEyrHRAQD-Vro4ZBDNlx60L5IxlwthyEE3SS2tb0xDz0GeL9Z2vGCrgg4KfM2PE763CwLtVB2B9LU~C2EjEQc4dLhkoFW0N3IxYrubeQ~9P8RIJYLY8wa8VZp8AajIcxNhNNLMUFxxKLIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            className="float-right w-32"
          />
        </div>
      </div>
      <div>
        <M3Form />
      </div>
    </div>
  );
};

export default Apply;
