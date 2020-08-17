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
