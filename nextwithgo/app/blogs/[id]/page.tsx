import { notFound } from 'next/navigation';
import { getBlogById } from '../../../services/blogService';
import Header from '@/components/Header';

interface Blog {
  id: string;
  title: string;
  content: string;
}

interface PageParams {
  id: string;
}

const BlogPost: React.FC<{ params: PageParams }> = async ({ params }) => {
  const { id } = params;

  try {
    const blog: Blog | null = await getBlogById(id);

    if (!blog) {
      notFound();
    }

    return (
      <div>
        <Header/>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
};

export default BlogPost;
