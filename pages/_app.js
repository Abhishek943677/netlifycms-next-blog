import React, { useEffect } from "react";
import Layout from "../components/layout/index.jsx";
import "../styles/globals.css";
//animate on scroll library
import Aos from "aos";
import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Layout>
      {/* layout is available in every page */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
