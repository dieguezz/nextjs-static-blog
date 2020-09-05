import Head from "next/head";
import styles from "../styles/Home.module.scss";
import ArticleList from "../modules/article/components/ArticleList";
import { getAll } from "../modules/article/services/article.service";

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our great blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ArticleList articles={articles}></ArticleList>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: { articles: await getAll() },
  };
}
