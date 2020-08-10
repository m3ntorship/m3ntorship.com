import '../styles/index.css';
import Layout from '../components/Layout';
import { mentorshipAPI } from '../clients/mentorship.js';
import getPageName from '../helper/getPageName';
function MyApp({ topBarData, footerData, Component,pageProps, pageName }) {
  return (
    <Layout pageName={pageName} topBarData={topBarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ ctx: { asPath } }) => {
  let pageName = await getPageName(asPath);
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
      footerData,
      pageName
    };
  });
};
