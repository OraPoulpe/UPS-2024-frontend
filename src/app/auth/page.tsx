'use client';
import Image from 'next/image';
import welcome from '../../../public/images/Welcome.svg'
import { useRouter } from 'next/navigation';

export default function Auth() {
  const router = useRouter();

  return (
    <div className="w-full h-full overflow-hidden"  onClick={() => {router.push('/auth/login')}}>
      <Image src={welcome} width={500} height={1000} alt="" />
    </div>
  );
}
