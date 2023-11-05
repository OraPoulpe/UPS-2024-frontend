import React, { FC } from 'react';
import { Text } from '@/shared/ui/Text';
import { Swiper } from '@/widgets/Swiper';

export const HomePage: FC = () => {
  return (
    <div>
      <Text type="h1" size={24} weight={800}>
        Рецепт на ближайший приём пищи:
      </Text>
      <Swiper />
    </div>
  );
};
