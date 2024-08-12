"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField, // Import FormField here
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import { postBlog } from "@/services/blogService";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"; // Use next/navigation for client-side routing

// Define the schema using zod
const BlogFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(100, { message: "Title must not be longer than 100 characters." }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters." })
    .max(5000, { message: "Content must not be longer than 5000 characters." }),
});

export default function Compose() {
  const router = useRouter(); // Use useRouter from next/navigation
  const form = useForm<z.infer<typeof BlogFormSchema>>({
    resolver: zodResolver(BlogFormSchema),
  });

  const handleSubmit = async (data: z.infer<typeof BlogFormSchema>) => {
    try {
      await postBlog(data);
      toast({
        title: "Blog posted successfully",
        description: "Your blog post has been published.",
      });
      form.reset(); // Reset form after successful submission
      router.push("/blogs"); // Redirect to the /blogs route
    } catch (error) {
      console.error("Failed to post blog:", error);
      toast({
        title: "Error",
        description: "Failed to post blog.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="pt-10 flex flex-col lg:px-24 px-4 gap-4 justify-center mb-10 bg-gradient-to-b from-[#A6CFD5] to-white dark:from-[#0D0221]">
        <div className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-[#14272A] to-[#223F44] dark:bg-gradient-to-b dark:from-[#250660] dark:to-[#eaeefe] text-transparent bg-clip-text pb-5">
          Compose a New Blog Post
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="mt-10 space-y-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-4 items-center">Title</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter the title of your blog"
                      className="input-class" // Adjust the class to your design
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-4 items-center">Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your blog content here"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
