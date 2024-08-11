import Link from 'next/link';
import Card from '@/components/Card';
import FeaturedPosts from '@/components/FeaturedPosts';
import NewsLetterSignup from '@/components/NewsLetterSignup';
import {Testimonials} from '@/components/Testimonials';
import Header from '@/components/Header';
export default function Home() {
  return (
    <div>
      <Header />
      <FeaturedPosts/>

      <NewsLetterSignup />
      <Testimonials />

      {/* Footer Section
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>© 2024 My Blog. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="https://twitter.com" className="hover:text-blue-400">Twitter</Link>
          <Link href="https://facebook.com" className="hover:text-blue-600">Facebook</Link>
          <Link href="https://instagram.com" className="hover:text-pink-600">Instagram</Link>
        </div>
      </footer> */}
    </div>
  );
}
