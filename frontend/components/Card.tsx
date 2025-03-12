import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, description, href }) => {
  return (
    <div className="card border p-4 rounded shadow-sm h-64 w-64 flex flex-col justify-between">
      <div className="flex-grow">
        <h3 className="font-bold text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
      <div className="flex justify-center mt-4">
        <Link href={href} className="text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
