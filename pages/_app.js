import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from '../src/ui/Theme';
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer';

import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0) 

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        {/* <CssBaseline /> */}
        <Header value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex} />
        <Component {...pageProps} setValue={setValue} setSelectedIndex={setSelectedIndex} />
        <LazyLoadComponent threshold={550}>
          <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </LazyLoadComponent>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
