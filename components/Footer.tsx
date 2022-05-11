import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <small>&copy; {new Date().getFullYear()} Harry Edwards</small>
      </footer>
    </>
  )
}
