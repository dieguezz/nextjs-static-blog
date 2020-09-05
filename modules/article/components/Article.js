import styles from './Article.module.scss'

export default function Article({ title, body }) {
  return <div>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} />
  </div>;
}
