import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
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
    </>
  )
}
