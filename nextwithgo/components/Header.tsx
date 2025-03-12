import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { ModeToggle } from './theme-change';
import Navbar from './Navbar';
import { Button } from './ui/button';

function Header() {
  return (
    <header className="mx-auto bg-gradient-to-b from-[#3B747D] to-[#A6CFD5] dark:bg-gradient-to-b dark:from-[#27233A] dark:to-[#0D0221] px-4 pt-8 pb-2 lg:px-14">
    <div className="max-w-screen-2xl mx-auto">
				<div className="w-full flex items-center justify-between mb-14">
					<div className="flex items-center lg:gap-x-16">
						<Navbar />
					</div>
					<div>
					<ModeToggle />
					</div>
				</div>
    </div>
		</header>
  );
};

export default Header;
