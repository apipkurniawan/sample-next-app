import React from 'react';
import axios from 'axios';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const myLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>
        Product List rendered with SSG
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product) => (
          <div key={product.id} className='border p-4 rounded-lg shadow-lg'>
            <Image
              src={product.image}
              alt={product.name}
              className='w-full h-40 object-cover mb-4 rounded-lg'
              width={160}
              height={160}
              loader={myLoader}
            />
            <h2 className='text-xl font-semibold'>{product.name}</h2>
            <p className='text-gray-700'>{product.description}</p>
            <p className='text-lg font-bold text-green-600'>${product.price}</p>
          </div>
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
