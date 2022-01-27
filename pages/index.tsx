import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../components/button';
import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Button>
          Tailwind Fundamentals
        </Button>
      </div>
    </>
  )
}

export default Home;
