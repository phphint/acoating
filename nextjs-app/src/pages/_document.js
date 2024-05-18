import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en"> {/* Ensure the language code is correct for your content */}
        <Head>
          {/* Google Site Verification Meta Tag */}
          <meta name="google-site-verification" content="cIx9ZS69dPBDEeZ4gt9K966W333v46mR4cFxWuSqXEw" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
