import React from 'react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold'>{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        className='w-64 h-64 object-contain my-4'
      />
      <p className='text-gray-600'>{product.description}</p>
      <p className='font-semibold text-green-600 my-2'>
        ${product.price.toFixed(2)}
      </p>
      <p className='text-gray-500'>Category: {product.category}</p>
      <Link href='/' className='text-blue-500 underline mt-4 block'>
        Back to Products
      </Link>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  const products: Product[] = response.data;

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const product: Product = response.data;

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
