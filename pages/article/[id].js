import { useRouter } from "next/router";
import Article from "../../modules/article/components/article.component";
import { getAll, getByCanonical } from "../../modules/article/services/article.service";
import marked from 'marked'

export default function article({ article }) {
  const router = useRouter();
  const { id } = router.query;

  console.log('THE ARTICLE?', article)

  return <Article {...article}></Article>;
}

export async function getStaticPaths() {
    const articles = await getAll()
  
    const paths = articles.map((article) => ({
      params: { id: article.canonical },
    }))
  
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
    const article = await getByCanonical(params.id)
    const body = marked(article.body, { baseUrl: process.env.STRAPI_HOST })
  
    return { props: { article: { ...article, body} } }
  }