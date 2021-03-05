import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Book() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fades Away Barbershop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.nav}>
        <Link href="/" >
          <a>Home</a>
        </Link>

        <Link href="/gallery" >
          <a>Gallery</a>
        </Link>
        
        <Link href="/book" >
          <a>Book Online</a>
        </Link>

        <Link href="/shop" >
          <a>Shop</a>
        </Link>

        <Link href="/about" >
          <a>About</a>
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the book online page!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Home &rarr;</h3>
          </a>
          <a href="/gallery" className={styles.card}>
            <h3>Gallery &rarr;</h3>
          </a>

          <a href="/book" className={styles.card}>
            <h3>Book Online &rarr;</h3>
          </a>

          <a href="/shop" className={styles.card}>
            <h3>Shop &rarr;</h3>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        ©2019 by Fades Away Barbereshop. 
      </footer>
    </div>
  )
}

export default Book