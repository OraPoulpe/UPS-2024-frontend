import React, { FC } from 'react';
import { Stack } from './components/Stack/Stack';
import { Item, StyledWrap } from './Swiper.style';
import { DishCard } from './components/DishCard/DishCard';
import { dishes } from '../../../../public/data/dishes/dishes';

export const Swiper: FC = () => {
  return (
    <Stack onVote={(item, vote) => console.log(item?.props, vote)}>
      {dishes.map((dish) => (
        <DishCard key={dish.id} {...dish} />
      ))}
    </Stack>
  );
};
