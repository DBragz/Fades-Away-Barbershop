import styles from '../styles/Home.module.css'
import Footer from './footer'
import Navbar from './navbar'
import Header from './header'

export default function About() {
  return (
    <div className={styles.container}>
      <Header />

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to about page!
        </h1>
      </main>

      <Footer />
    </div>
  )
}
