import Link from 'next/link';
import Card from '@/components/Card';
export default function FeaturedPosts() {
    return (
      <div>
{/* Featured Posts Section */}
<section className="my-8 px-4">
<h2 className="text-2xl font-semibold text-center">Featured Posts</h2>
<div className="card-container mt-6">
  <Card
    title="Post Title 1"
    description="A brief description of the blog post..."
    href="/blogs/post-1"
  />
  <Card
    title="Post Title 2"
    description="A brief description of the blog post..."
    href="/blogs/post-2"
  />
  <Card
    title="Post Title 3"
    description="A brief description of the blog post..."
    href="/blogs/post-3"
  />
</div>
</section>
</div>
    )};