import Link from "next/link";
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.root}>
      <Link href="/">
        <a className={styles.title}>Our awesome blog</a>
      </Link>
    </header>
  );
}
