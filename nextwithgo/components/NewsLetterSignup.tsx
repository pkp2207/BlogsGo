"use client";

import React from 'react';
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

  const onSubmit = (values: { email: string }) => {
    console.log('Form Submitted:', values);
    // Handle the form submission, e.g., send data to an API
  };

  return (
    <div className="my-8 p-4 bg-gray-100 rounded mx-4">
      <h2 className="text-2xl font-semibold text-center">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 text-center mb-4 mt-2">
        Get the latest updates and articles delivered straight to your inbox.
      </p>
      <div className="flex flex-col items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
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
              <Button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                Subscribe
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewsLetterSignup;
