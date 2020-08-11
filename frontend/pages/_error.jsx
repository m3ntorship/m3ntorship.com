import CustomError from '../components/CustomError';

function Error({ statusCode }) {
  return <CustomError statusCode={statusCode} />;
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

export default Error;
