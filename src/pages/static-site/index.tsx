import Image from 'next/image';
import React from 'react';

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

function aboutPage() {
  const products = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
      name: 'Mens Casual Premium Slim Fit T-Shirts ',
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      name: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6'>Product List</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
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
}

export default aboutPage;
