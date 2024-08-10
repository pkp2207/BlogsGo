import Link from 'next/link';
import styles from './Header.module.css'; // Import CSS module for styling
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Link href="/">My Blog</Link>
        </h1>
        <Navbar /> {/* Include the Navbar component here */}
      </div>
    </header>
  );
};

export default Header;
