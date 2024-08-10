"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import { postBlog } from "@/services/blogService";

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
      <h1>Compose a New Blog Post</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <input
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
                <FormLabel>Content</FormLabel>
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
  );
}
