import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Contact() {
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
          Welcome to the contact page!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        
      </main>

      <footer className={styles.footer}>
        ©2019 by Fades Away Barbershop. 
      </footer>
    </div>
  )
}

export default Contact