import 'modali/dist/modali.css';
import '../static/css/index.css';

import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({ autoClose: 2000 });
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>NoName - Системы Умный дом для квартир, домов и коммерческой недвижимости</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
