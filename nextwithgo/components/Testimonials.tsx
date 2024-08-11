import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "This blog has been a fantastic resource for staying updated with the latest trends in tech. Highly recommend!",
    author: "John Doe"
  },
  {
    text: "I love the variety of content available. There’s always something new to learn.",
    author: "Jane Smith"
  },
  {
    text: "The insights provided here are invaluable. Great job on curating such engaging content!",
    author: "Sam Wilson"
  },
  {
    text: "I’ve found some amazing tips and tricks that have really helped me in my career. Thank you!",
    author: "Lisa Johnson"
  },
  {
    text: "A fantastic blog with high-quality articles. I look forward to each new post!",
    author: "Michael Brown"
  }
];

export function Testimonials() {
  return (
    <div className="relative w-full py-12">
      <h2 className="text-center text-2xl font-bold mb-8">Testimonials</h2>
      <Carousel
        opts={{ align: "start" }}
        className="relative w-full bg-gradient-to-r from-blue-500 to-purple-500 py-12"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="w-full flex justify-center items-center px-4"
            >
              <div className="w-full flex justify-center">
                <Card className="w-full max-w-lg bg-white shadow-lg rounded-lg">
                  <CardContent className="p-6">
                    <p className="text-lg italic text-center text-gray-800">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <span className="block text-gray-600 mt-4 text-center">
                      - {testimonial.author}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full" />
      </Carousel>
    </div>
  );
}
