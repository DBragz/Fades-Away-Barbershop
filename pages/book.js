import styles from '../styles/Home.module.css'
import Footer from './footer'
import Navbar from './navbar'
import Header from './header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Navbar />

      <main className={styles.main}>
        <a className={styles.booksy} href='https://booksy.com/en-us/144649_fades-away-barbershop_barber-shop_22277_melrose'>
          Booksy
        </a>
      </main>

      <Footer />
    </div>
  )
}
