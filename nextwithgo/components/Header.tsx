import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} bg-gray-100 shadow-sm`}>
      <div className="container mx-auto p-4 text-center">
        
        <Navbar />
        <h1 className="text-2xl font-bold text-blue-600">
          <Link href="/" className="flex items-center justify-center">
            My Blog
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
