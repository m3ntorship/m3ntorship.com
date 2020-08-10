import Head from 'next/head';
import { TopBar } from '../TopBar';
import Footer from '../footer';
const Layout = ({
  children,
  topBarData,
  topBarBackgroundColor,
  topBarButtonColor,
  topBarButtonShadow,
  footerData
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/svg"
          href="../../static/favicon/favicon.ico"
        ></link>
      </Head>
      <header>
        <TopBar
          data={topBarData}
          background_color={topBarBackgroundColor}
          button_color={topBarButtonColor}
          button_shadow={topBarButtonShadow}
        />
      </header>
      <main>{children}</main>
      <Footer data={footerData} />
    </>
  );
};

export default Layout;
