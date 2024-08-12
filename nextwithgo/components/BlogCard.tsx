import Link from 'next/link';
import { Blog } from '../types/blog';
import styles from './BlogCard.module.css'; // Import CSS module for styling

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className={styles.blogCard}>
      <h2 className={styles.blogTitle}>{blog.title}</h2>
      <p className={styles.blogContent}>{blog.content.substring(0, 100)}...</p>
      <Link href={`/blogs/${blog.id}`} className={styles.readMore}>
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
