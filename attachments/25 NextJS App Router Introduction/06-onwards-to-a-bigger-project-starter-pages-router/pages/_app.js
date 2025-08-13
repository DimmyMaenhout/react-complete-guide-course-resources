import "../styles/globals.css";
import Layout from "../components/layout/Layout";

// this file/component acts as the root component NextJS will render
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />.
    </Layout>
  );
}

export default MyApp;
