'use client';
import Image from 'next/image';
import login from '../../../../public/images/LoginBg.svg'
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  return (
    <div className="w-full h-full overflow-hidden"  onClick={() => {router.push('/home')}}>
      <Image src={login} width={500} height={1000} alt="" />
    </div>
  );
}



