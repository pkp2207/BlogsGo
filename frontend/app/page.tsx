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

    </div>
  );
}
