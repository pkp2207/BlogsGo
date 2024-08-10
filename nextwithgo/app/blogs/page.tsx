"use client"
import { useState, useEffect } from 'react';
import { getBlogs } from '../../services/blogService';
import BlogCard from '../../components/BlogCard';
import { Blog } from '../../types/blog';
import Header from '@/components/Header';
import Searchbar from '@/components/Searchbar';

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
      <h1>All Blog Posts</h1>
      <Searchbar onSearch={handleSearch} />
      {filteredBlogs.length === 0 ? (
        <div>No blog posts available.</div>
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
  );
};

export default Blogs;
