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
        <html lang="ru">
          <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
              name="description"
              content="Проектирование и монтаж систем Автоматизации зданий. Системы Умный дом для квартир, домов и коттеджей."
            />
            <meta
              name="keywords"
              content="Умный дом, Автоматизация, Климат в доме, Мультирум, Мультимедиа, Система Видеонаблюдения, Охранная сигнализация для частного сектора, Системы безопасности, Сестемы деспетчеризации, Системы мониторинга"
            />
          </Head>
          <style>{`
          `}</style>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      </Html>
    );
  }
}

export default MyDocument;

/*
box-shadow: 2px 2px 2px 1px var(--main-color);
*/
