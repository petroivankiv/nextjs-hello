import Head from 'next/head';
import { GetStaticProps } from 'next';

import Layout, { siteTitle } from 'components/layout';

import { getLatestPosts } from '../lib/posts';
import Cards from 'components/cards';

export const getStaticProps: GetStaticProps = async () => {
  const latestsPosts = getLatestPosts();

  return {
    props: {
      latestsPosts,
    },
  };
};

export default function Home({
  latestsPosts,
}: {
  latestsPosts: {
    date: string;
    title: string;
    topic: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Cards items={latestsPosts} />
    </Layout>
  );
}
