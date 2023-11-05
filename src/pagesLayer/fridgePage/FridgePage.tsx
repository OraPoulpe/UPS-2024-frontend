import { TagsInput } from '@/shared/ui/inputs/TagsInput';
import React, { FC } from 'react';
import { products } from '../../../public/data/products/products';
import { Text } from '@/shared/ui/Text';
import { PALETTE } from '@/shared/lib/constants';

export const FridgePage: FC = () => {
  return (
    <div className='flex flex-col gap-5 h-full'>
      <Text type="h1" size={24} color={PALETTE['text-black']} weight={800}>
        Мой холодильник
      </Text>
      <TagsInput data={products} />
    </div>
  );
};
