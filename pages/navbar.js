import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
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
    </>
  )
}
