import Link from "next/link";
import styles from "./ArticleList.module.scss";

export default function ArticleList({ articles }) {
  return articles.length ? (
    <ol className={styles.list}>
      {articles.map((article) => (
        <li key={article.id} className={styles.item}>
          <Link href={`article/${article.canonical}`}>
            <h2 className={styles.title}>{article.title}</h2>
          </Link>
          <p className={styles.description}>{article.description}...</p>
        </li>
      ))}
    </ol>
  ) : (
    <div>There are no articles</div>
  );
}
