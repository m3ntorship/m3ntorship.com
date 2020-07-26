import React, { useState } from 'react';
import GenericParagrapgh from '../shared/GenericParagrapgh/index';
const Form = ({ inputFields }) => {
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
    console.log(data);
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
        <div className="px-10 mx-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/2b73/7a06/63d6c70e5a3acaea8b40ac2bc166be42?Expires=1596412800&Signature=g2aHFQjxXo-lKLl~mUB3J34Nx9U9VwKnTXTFnYYqJtMllS-k8H6~TGwJ71uIPrMmzubkddOCCHcSONnZMXO~HzeaD1NG~lDjgeIJMekh9sibKiueQGnZlnrU995Cf0tOxwp8vpWCEdFyoRwdhWVafdX~Sd17fejv-nKCXdVJ2aDtBJgw1xtQjJgZPmY96yd8PCUaTxMZhf8ZSKAtVj9A7tkerPwo6eI5-8WqQnHsYR7SK2seki3fe5Ff84kh9mIlRWPaNhk0bqPNkOOt05tTa5KDU8unBiXon0DzFS01CuctFJDJO-IU1ShSmR-qpy~dLUiRvbeISFPcvsWNTt5AKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Form;
