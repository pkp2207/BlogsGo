"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS module for styling

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </button>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blogs/compose">Create New Blog</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
