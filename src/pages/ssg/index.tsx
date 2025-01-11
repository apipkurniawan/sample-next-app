import React from 'react';
import axios from 'axios';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Product List</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            path={'/ssg/product/' + product.id}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  const products: Product[] = response.data;

  return {
    props: {
      products,
    },
  };
};

export default Home;
