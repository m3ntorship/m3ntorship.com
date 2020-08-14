import '../styles/index.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
