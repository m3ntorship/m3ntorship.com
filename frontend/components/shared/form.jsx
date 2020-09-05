import React, { useState } from 'react';
import GenericParagrapgh from '../shared/GenericParagrapgh/index';
import dynamic from 'next/dynamic';

const LazyImage = dynamic(() => import('../../helper/lazy-image'), {
  ssr: false
});

const Form = ({ inputFields, sideImg }) => {
  const createData = () => {
    let temp = {};
    inputFields.forEach(el => {
      temp[el.props.name] = '';
    });
    return temp;
  };
  let data = createData();
  const handleChange = e => {
    const { name, value } = e.target;
    data[name] = value;
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 py-12 shadow-xl">
        <div>
          <h3 className="font-black text-base">Basic Info</h3>
          <GenericParagrapgh textColor="gray" customClassName="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.
          </GenericParagrapgh>
          <form className="mt-8" onSubmit={handleSubmit}>
            {inputFields.map(el => {
              return React.createElement(el.tag, {
                ...el.props,
                onChange: handleChange
              });
            })}
            {/* <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
            />
             */}
            <input type="submit" value="Apply Now" />
          </form>
        </div>
        <div className="px-10 mx-10 hidden md:block">
          <LazyImage src={sideImg} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default Form;
