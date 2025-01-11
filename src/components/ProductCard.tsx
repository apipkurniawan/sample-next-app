import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
}) => {
  return (
    <div className='border rounded p-4 shadow-md'>
      <h2 className='text-lg font-bold'>{title}</h2>
      <p className='text-gray-600'>{description}</p>
      <p className='font-semibold text-green-600'>${price.toFixed(2)}</p>
      <Link href={`/ssg/${id}`} className='text-blue-500 underline mt-2 block'>
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
