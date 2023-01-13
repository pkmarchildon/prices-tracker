import Link from 'next/link';
import Image from 'next/image';

export default function CategoryTile({ imagePath, category }) {
  return (
    <Link href={`/category/${category}`} className='categoryTile'>
      <Image src={imagePath} alt={category} width={100} height={100} />
    </Link>
  );
}
