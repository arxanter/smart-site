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
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
        <style>{`
            body {
              margin: 0;
              padding: 0;
              font-family: Raleway, sans-serif;
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
              padding: 0;

            }
            
            h1 {
              font-size: 48px;
            }
            
            h2 {
              text-align: center;
              padding: 40px 0;
              font-size: 36px;
              color: var(--dark-color);
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
              cursor: pointer;
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

            .mark-underline {
              color: inherit;
              margin: 10px;
              background: linear-gradient(180deg, transparent 50%, var(--main-color) 0);
            }

            :root {
              --main-color: #ff6f61;
              --main-light-color: rgba(255, 111, 97, 0.45);
              --dark-color: #262320;
              --light-color: #ffffff;
              --light-vis-color: rgba(255, 255, 255, 0.2);
              --gray-color: #dcdcdc;
            }
            
            .md-section p {
              margin-top: 10px;
            }
            .md-section ul {
              list-style-type: none;
            }
            .md-section li {
              margin-top: 5px;
              margin-left: 10px;
              position: relative;
            }
            .md-section li::before{
              content: '';
              position: absolute;
              top: 0.25em;
              left: -1.4em;
              width: 7px;
              height: 7px;
              border-radius: 7px;
              border: solid 4px var(--main-color);
              background-color: var(--light-color);
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
