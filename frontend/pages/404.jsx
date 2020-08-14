import CustomError from '../components/CustomError';

export default function Custom404() {
  return <CustomError statusCode={404} />;
}
