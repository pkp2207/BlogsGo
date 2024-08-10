// app/page.tsx

import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <nav>
        <Header/>
        <Link href="/blogs">View All Blogs</Link>
        <Link href="/blogs/compose">Compose New Blog</Link>
      </nav>
    </div>
  );
}
