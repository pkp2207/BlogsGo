"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
	return (
		<div className="h-[20rem] w-full dark:bg-black bg-white bg-grid-black/[0.2] dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
			<h2 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-[#14272A] to-[#223F44] dark:bg-gradient-to-b dark:from-[#250660] dark:to-[#eaeefe] text-transparent bg-clip-text pb-5">Testimonials</h2>
			<div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-6xl">
					<InfiniteMovingCards
						items={testimonials}
						direction="right"
						speed="slow"
					/>
				</div>
			</div>
		</div>
	);
}

const testimonials = [
	{
		quote:
			"This blog has been a fantastic resource for staying updated with the latest trends in tech. Highly recommend!",
		name: "John Doe",
		title: "",
	},
	{
		quote:
			"I love the variety of content available. There’s always something new to learn.",
		name: "Jane Smith",
		title: "",
	},
	{
		quote:
			"The insights provided here are invaluable. Great job on curating such engaging content!",
		name: "Sam Wilson",
		title: "",
	},
	{
		quote:
			"I’ve found some amazing tips and tricks that have really helped me in my career. Thank you!",
		name: "Lisa Johnson",
		title: "",
	},
	{
		quote:
			"A fantastic blog with high-quality articles. I look forward to each new post!",
		name: "Michael Brown",
		title: "",
	},
];

// export function Testimonials() {
//   return (
//     <div className="relative w-full py-12">
//       <div>hi</div>
//     </div>
//   );
// }
