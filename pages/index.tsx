import Head from 'next/head';
import { GetStaticProps } from 'next';

import List from 'components/list';
import Layout, { siteTitle } from 'components/layout';

import { getLatestPosts } from '../lib/posts';

const name = 'Your Name';

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
      <List items={latestsPosts} title="Latest posts" />
    </Layout>
  );
}
