'use client';

import React, { useState } from 'react';
import { Input } from './ui/input';
import Image from 'next/image';

interface SearchbarProps {
  onSearch: (searchTerm: string) => void;
  initialSearch?: string;
}

const Searchbar = ({ onSearch, initialSearch = '' }: SearchbarProps) => {
  const [search, setSearch] = useState(initialSearch);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative mt-8 block">
      <Input
        className="input-class py-6 pl-12 focus-visible:ring-offset-[--accent-color]"
        placeholder="Search for blog posts"
        value={search}
        onChange={handleChange}
      />
      <Image
        src="/icons/search.svg"
        alt="search"
        height={20}
        width={20}
        className="absolute left-4 top-3.5"
      />
    </div>
  );
};

export default Searchbar;
