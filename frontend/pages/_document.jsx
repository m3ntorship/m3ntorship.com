import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US" style={{ fontSize: '14px' }}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <meta property="og:site_name" content="M3ntorship" />
          <meta property="og:type" content="website" />
          <link
            rel="shortcut icon"
            type="image/svg"
            href="../../static/favicon/favicon.ico"
          ></link>
        </Head>
        <body className="font-body leading-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
