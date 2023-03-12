import Head from 'next/head';
import { ReactNode } from 'react';

import Header from '../header';
import Welcome from '../welcome';

export const siteTitle = 'Next.js Hello';

type Props = {
  children: ReactNode;
  home?: boolean;
};

export default function Layout({ children, home }: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      {home && <Welcome />}
      <div className={`${home ? 'w-3/4' : 'w-1/2'} px-4 pb-4 mx-auto`}>
        <main>{children}</main>
      </div>
    </div>
  );
}
