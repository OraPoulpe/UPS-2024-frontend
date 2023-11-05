import React, { FC } from 'react';
import profile from '../../../public/images/Profile.svg'
import Image from 'next/image';

export const ProfilePage: FC = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
     <Image src={profile} width={335} height={606} alt=''/>
    </div>
  );
};
