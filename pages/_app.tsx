import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Elevating real estate experiences with 3D immersion" />
        <title>Meta-dology</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
