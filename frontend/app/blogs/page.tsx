"use client"
import { useState, useEffect } from 'react';
import { getBlogs } from '../../services/blogService';
import BlogCard from '../../components/BlogCard';
import { Blog } from '../../types/blog';
import Header from '@/components/Header';
import Searchbar from '@/components/Searchbar';
import { Link } from 'lucide-react';

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Fetch blogs when the component mounts
    const fetchBlogs = async () => {
      try {
        const blogsData: Blog[] = await getBlogs();
        setBlogs(blogsData);
        setFilteredBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    // Filter blogs based on the search term
    if (searchTerm) {
      setFilteredBlogs(
        blogs.filter(blog =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredBlogs(blogs);
    }
  }, [searchTerm, blogs]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header />
      <div className='pt-10 flex flex-col lg:px-24 px-4 gap-4 justify-center mb-10 bg-gradient-to-b from-[#A6CFD5] to-white dark:from-[#0D0221]'>
      <div className='text-5xl font-bold tracking-tighter bg-gradient-to-b from-[#14272A] to-[#223F44] dark:bg-gradient-to-b dark:from-[#250660] dark:to-[#eaeefe] text-transparent bg-clip-text pb-5'>All Blog Posts</div>
      <Searchbar onSearch={handleSearch} />
      {filteredBlogs.length === 0 ? (
        <div className='text-center'>No blog posts available. Add one by <Link href = '/blogs/compose'>this</Link></div>
      ) : (
        <ul>
          {filteredBlogs.map((blog: Blog) => (
            <li key={blog.id}>
              <BlogCard blog={blog} />
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default Blogs;
