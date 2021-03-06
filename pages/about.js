import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fades Away Barbershop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.nav}>
        <Link href="/" >
          <a className={styles.link}>Home</a>
        </Link>

        <Link href="/gallery" >
          <a className={styles.link}>Gallery</a>
        </Link>
        
        <Link href="/book" >
          <a className={styles.link}>Book Online</a>
        </Link>

        <Link href="/shop" >
          <a className={styles.link}>Shop</a>
        </Link>

        <Link href="/about" >
          <a className={styles.link}>About</a>
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the about page!
        </h1>

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
        <a href="https://www.instagram.com/fadesawaybarbershop/">
          <Image
            src="/instagram.webp"
            alt="instagram"
            width={20}
            height={20}
          />
        </a>
        <a href="https://www.facebook.com/Fades-Away-Barbershop-2291895647707219/">
          <Image
            src="/facebook.webp"
            alt="instagram"
            width={20}
            height={20}
          />
        </a>
      </footer>
    </div>
  )
}

export default About