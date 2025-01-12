import Image from 'next/image';

// const myLoader = ({
//   src,
//   width,
//   quality,
// }: {
//   src: string;
//   width: number;
//   quality?: number;
// }) => {
//   return `${process.env.NEXT_PUBLIC_BASE_URL}${src}?w=${width}&q=${
//     quality || 75
//   }`;
// };
// const myLoaderURL = ({
//   src,
//   width,
//   quality,
// }: {
//   src: string;
//   width: number;
//   quality?: number;
// }) => {
//   return `${src}?w=${width}&q=${quality || 75}`;
// };

const images = [
  {
    src: '/example.jpg',
    alt: 'Sample Image 1',
    width: 500,
    height: 300,
  },
  {
    src: '/example2.jpg',
    alt: 'Sample Image 2',
    width: 500,
    height: 300,
  },
  {
    src: '/example3.jpg',
    alt: 'Sample Image 3',
    width: 500,
    height: 300,
  },
  {
    src: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    alt: 'Sample Url',
    width: 500,
    height: 300,
  },
];

const ImagesPage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Image Gallery</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {images.map((image, index) => (
          <div key={index} className='border rounded-lg shadow-lg p-4'>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className='rounded-lg'
              placeholder='blur' // Optional jika menggunakan gambar blur
              blurDataURL='/placeholder.png' // Gambar placeholder opsional
              // loader={image.src.startsWith('http') ? myLoaderURL : myLoader}
              priority={index == 2}
            />
            <p className='text-center mt-2 text-sm text-gray-600'>
              {image.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesPage;
