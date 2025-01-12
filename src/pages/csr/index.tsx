import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
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

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

const ProductsPage = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ['products'], // Gunakan satu objek sebagai argumen
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <p className='text-center text-xl'>Loading...</p>;
  }

  if (error instanceof Error) {
    return (
      <p className='text-center text-xl text-red-500'>Error: {error.message}</p>
    );
  }

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
};

export default ProductsPage;
