"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LogOut, MailCheck } from 'lucide-react';
import axios from "axios";

// Define the schema using Zod
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

const NewsLetterSignup: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: { email: string }) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscribe`, values);
      setMessage(response.data.message);
      setError(null);
      form.reset();
    } catch (err: any) {
      setError(err.response?.data?.error || "An error occurred");
      setMessage(null);
    }
  };

  return (
    <div className="p-4 bg-gradient-to-b from-[#A6CFD5] to-white dark:bg-gradient-to-b dark:from-[#0D0221] dark:to-black bg-gray-100 rounded py-10">
      <h2 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-[#14272A] to-[#223F44] dark:bg-gradient-to-b dark:from-[#250660] dark:to-[#eaeefe] text-transparent bg-clip-text pb-5 text-center">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 text-center mt-2">
        Get the latest updates and articles delivered straight to your inbox.
      </p>
      <div className="mt-10 flex flex-col lg:px-24 px-4 gap-4 justify-center mb-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-4 items-center">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className="p-2 border rounded w-full"
                    />
                  </FormControl>
                  <FormDescription>
                    We&apos;ll never share your email with anyone else.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" variant="outline" className="flex gap-4 items-center border-[#256EFF]">
                <MailCheck />
                Subscribe
              </Button>
            </div>
          </form>
        </Form>
        {message && <p className="text-center text-green-600">{message}</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default NewsLetterSignup;
