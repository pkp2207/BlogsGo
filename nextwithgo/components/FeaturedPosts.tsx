"use client";
import Link from "next/link";
import Card from "@/components/Card";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/button";

const postsData = {
  Posts: [
    {
      id: 1,
      title: "Post Title 1",
      description: "A brief description of the blog post...",
      href: "/blogs/post-1",
    },
    {
      id: 2,
      title: "Post Title 2",
      description: "A brief description of the blog post...",
      href: "/blogs/post-2",
    },
    {
      id: 3,
      title: "Post Title 3",
      description: "A brief description of the blog post...",
      href: "/blogs/post-3",
    },
  ],
};

interface Post {
  id: number;
  title: string;
  description: string;
  href: string;
}

export default function FeaturedPosts() {
  return (
    <div className="py-12 bg-[#A6CFD5] dark:bg-[#0D0221]">
      <div>
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-[#14272A] to-[#223F44] dark:bg-gradient-to-b dark:from-[#250660] dark:to-[#eaeefe] text-transparent bg-clip-text pb-5">
            Featured Posts
          </h2>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {postsData.Posts.map((post: Post) => (
            <div
              key={post.id}
              className="flex justify-center transform transition-transform duration-300 hover:scale-105"
            >
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm shadow-lg">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {post.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {post.description}
                  </p>
                  <Link href={post.href} className="mt-8">
                    Read More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/blogs"}>
          <Button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg dark:bg-gradient-to-r dark:from-indigo-500 dark:to-purple-500" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              View All Blogs
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
