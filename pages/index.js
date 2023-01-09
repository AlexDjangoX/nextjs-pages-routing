import styles from '../styles/Home.module.css';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Hello World, Next JS !!</h1>

        <ul>
          <li>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link href='/clients'></Link>
          </li>
        </ul>
      </main>
    </>
  );
}
