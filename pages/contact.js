import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fades Away Barbershop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.nav}>
        <Image
          className={styles.navpic}
          src="/Fades Away Barbershop.webp"
          alt="instagram"
          width={150}
          height={75}
        />
        <div className="space-x-6 ...">
          <span className="-inline-block ...">
            <Link href="/" >
              <a className={styles.link}>Home</a>
            </Link>
          </span>
          <span className="inline-block ...">
            <Link href="/gallery" >
              <a className={styles.link}>Gallery</a>
            </Link>
          </span>
          <span className="inline-block ...">
            <Link href="/book" >
              <a className={styles.link}>Book Online</a>
            </Link>
          </span>
          <span className="inline-block ...">
            <Link href="/shop" >
              <a className={styles.link}>Shop</a>
            </Link>
          </span>
          <span className="inline-block ...">
            <Link href="/about" >
              <a className={styles.link}>About</a>
            </Link>
          </span>
        </div>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to book contact page!
        </h1>
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
