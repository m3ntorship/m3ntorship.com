import '../styles/index.css';
import Layout from '../components/Layout';
import { mentorshipAPI } from '../clients/mentorship.js';
function MyApp({ topBarData, footerData, Component, pageProps }) {
  return (
    <Layout topBarData={topBarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async () => {
  const layoutEndPointsArr = [
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer')
  ];
  return Promise.all(
    layoutEndPointsArr.map(endPoint => {
      return endPoint
        .then(res => {
          if (Object.keys(res.data).length) {
            return res;
          } else {
            return {
              data: {
                statusCode: 404
              }
            };
          }
        })
        .catch(err => ({
          data: {
            statusCode: 404
          }
        }));
    })
  ).then(([{ data: topBarData }, { data: footerData }]) => {
    return {
      topBarData,
      footerData
    };
  });
};
