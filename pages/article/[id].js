import marked from "marked";

import Article from "../../modules/article/components/Article";
import {
  getAll,
  getByCanonical,
} from "../../modules/article/services/article.service";
import Head from "next/head";

export default function article({ article }) {
  return (
    <div>
      <Head>
        <title>{article.title}</title>
      </Head>
      <main>
        <Article {...article}></Article>
      </main>

    </div>
  );
}

export async function getStaticPaths() {
  const articles = await getAll();

  const paths = articles.map((article) => ({
    params: { id: article.canonical },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = await getByCanonical(params.id);
  const body = marked(article.body, { baseUrl: process.env.STRAPI_HOST });

  return { props: { article: { ...article, body } } };
}
