"use client";

import Header from '@/components/Header';
import BlogForm from '../../../components/BlogForm';
import { postBlog } from '../../../services/blogService';
import LoaderSpinner from '@/components/LoaderSpinner';

interface BlogFormData {
  title: string;
  content: string;
}

export default function Compose() {
  const handleSubmit = async (data: BlogFormData) => {
    try {
      await postBlog(data);
      // Redirect or show a success message
    } catch (error) {
      console.error('Failed to post blog:', error);
    }
  };

  return (
    <div><Header/>
      <h1>Compose a New Blog Post</h1>
      <BlogForm onSubmit={handleSubmit} />
      {/* <LoaderSpinner/> */}
    </div>
  );
}
