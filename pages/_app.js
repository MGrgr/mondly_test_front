import App from "next/app";
import LayoutWrapper from "../layouts/layout-wrapper";

import "../css/styles.css";

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    );
  }
}
