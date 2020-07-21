import React from 'react';
import WantToContribute from '../components/Contribute';

export default {
  title: 'Want To Contribute',
  component: WantToContribute
};

const data = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
  img:
    'https://s3-alpha-sig.figma.com/img/3c53/f53d/0ac52468af6202c3b56cbee7efb46619?Expires=1596412800&Signature=Wny3ggmE7gADUU9dA2Wd~~40yzhdUdqI2kvnkU1dSGfDWfQ8cTF2H87JAm~7i58cb6QYes~-7nE5moGSh9ouXOItNi7JG7jwwYonD6aegLVXfrugT7f452vdPYAps~TXgohD8-Q3xnL5zQT1OSYMwbIb5-94bFZAJgrbQSHRKXHWpc7uE7GScpEfvzNdvtT9idPTVrsh3MfyJMD-BNLNo8eoo~-zx5UKCzaFMo1z3q4rTfIawMMmt9CI0ILojEQ2LOSkSmz5lxUzPLiHtXgNNTd3TBdlHK~ozyO-3xRt9JtLxRhcbMP0DUeT5W~nNvu5gLTmyr8hmsFV-~XlOCFtTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
};

export const WantToContributeComponent = () => {
  return <WantToContribute data={data} />;
};
