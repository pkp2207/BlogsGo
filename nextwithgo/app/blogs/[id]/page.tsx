import { notFound } from 'next/navigation';
import { getBlogById } from '../../../services/blogService';
import Header from '@/components/Header';
import Image from 'next/image';
import './try.css'; // Ensure this path is correct

interface Blog {
  id: string;
  title: string;
  content: string;
  date: string; // Add date to Blog interface if available
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
      <div className="min-h-screen bg-background">
        <Header />
        <header className="bg-primary py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-4 text-center text-primary-foreground">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {blog.title}
              </h1>
              <div className="flex items-center justify-center space-x-4 text-sm font-medium">
                <div>
                  <Image 
                    src="/placeholder.svg" 
                    alt="Author Avatar" 
                    width={32} 
                    height={32} 
                    className="h-8 w-8 rounded-full" 
                  />
                </div>
                <div>John Doe</div> {/* Replace with actual author if available */}
                <div>•</div>
                <div>{blog.date || 'August 10, 2024'}</div> {/* Use actual date if available */}
              </div>
            </div>
          </div>
        </header>
        <main className="container py-12 md:py-16 lg:py-20">
          <article className="prose prose-lg prose-primary dark:prose-invert mx-auto">
            {/* <figure className="lg:-mx-12 xl:-mx-20">
              <Image
                src="/placeholder.svg" // Use actual image URL if available
                alt="Featured image"
                width={1250}
                height={500}
                className="aspect-[5/2] overflow-hidden rounded-lg object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground">A minimalist living room</figcaption>
            </figure> */}
            <p>{blog.content}</p>
          </article>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
};

export default BlogPost;
