import Head from 'next/head';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Link from 'next/link';

import Layout from 'components/layout';

import { getAllPostIds, getPostData } from '../../lib/posts';
import PostInfo from 'components/post-info';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    topic: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-3xl font-bold my-4">{postData.title}</h1>
        <PostInfo post={postData} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <footer>
        <div className="mt-4">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </footer>
    </Layout>
  );
}
