// components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/assets/logo.png" alt="Aetherverse TV" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
};

export default Header;