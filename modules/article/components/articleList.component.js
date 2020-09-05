import Link from 'next/link'

export default function ArticleList({ articles }) {
  return articles.length ? (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`article/${article.canonical}`}><h2>{article.title}</h2></Link>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>There are no articles</div>
  );
}
