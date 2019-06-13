// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"/>
        <style>{`
            body {
              margin: 0;
              padding: 0;
              font-family: Raleway, sans-serif;
              font-display: auto;
              font-size: 16px;
              line-height: 1;
              overflow-x: hidden;
              color: #ffffff;
            }
            a {
              background-color: transparent;
              text-decoration: none;
              color: inherit;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: Helvetica, sans-serif;
              font-display: auto;
              font-weight: 700;
              margin: 0;
            }
            
            h1 {
              font-size: 48px;
            }
            
            h2 {
              font-size: 36px;
            }
            
            h3 {
              font-size: 21px;
            }
            
            h4 {
              font-size: 18px;
            }
            
            h5 {
              font-size: 16px;
            }
            ul, li, button, a {
              margin: 0;
              padding: 0;
              font-size: 16px;
            }
            button {
              background-color: transparent;
              border: none;
              color: inherit;
            }
            .primary-btn, .secondary-btn {
              height: 2.2em;
              font-size: 14px;
              padding: 0 20px;
              border-radius: 28px;
              box-sizing: border-box;
              background-color: var(--main-color);
              border: 1px solid var(--main-color);
              color: var(--light-color);
              cursor: pointer;
              outline: none;
            }
            .secondary-btn {
              background-color: transparent;
              border: 1px solid var(--light-color);
              color: var(--light-color);
            }
            .primary-btn:hover,  .secondary-btn:hover {
              opacity: 0.8;
              transition: 0.2s linear;
            }
            .primary-btn:active, .secondary-btn:active  {
              opacity: 0.4;
            }
            :root {
              --main-color: #ff6f61;
              --dark-color: #262320;
              --light-color: #ffffff;
            }
          `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

/*
box-shadow: 2px 2px 2px 1px var(--main-color);
*/