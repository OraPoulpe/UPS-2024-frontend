import React, { FC } from 'react';
import { Search } from '../../components/Search'
import {InfoCard} from '../../components/InfoCard'
import {Skillactive} from '../../components/Skillactive'

export const MainPage = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Skillactive/>
      <Search />
      <InfoCard/>
    </div>
  );
};

