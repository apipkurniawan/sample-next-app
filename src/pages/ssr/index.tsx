import { GetServerSideProps } from 'next';
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

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage = ({ products }: ProductsPageProps) => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6'>
        Product List rendered with SSR
      </h1>
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

// Fetch products using SSR
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetching data from a dummy API or your own backend
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
