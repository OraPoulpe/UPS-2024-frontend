import { IDish } from '@/shared/interfaces/Dish.interface';
import { PALETTE } from '@/shared/lib/constants';
import { Text } from '@/shared/ui/Text';
import Image from 'next/image';
import { FC } from 'react';

import styles from './DishCard.module.scss';
import { StyledDishCardWrap } from './DishCard.style';
import { LikeButton } from '@/shared/ui/buttons/LikeButton';
import { TextInCell } from '@/shared/ui/Card/TextInCell';

interface IDishCardProps extends IDish {}

export const DishCard: FC<IDishCardProps> = ({
  name,
  products,
  caloric,
  fats,
  protein,
  carbohydrates,
  time,
  image,
}) => {
  interface IParamELemetProps {
    name: string;
    data: number;
    units: string;
  }
  const ParamELemet: FC<IParamELemetProps> = ({ name, data, units }) => {
    return (
      <li className={styles.liParam}>
        <Text type="h3" size={12} color={PALETTE['white']}>
          {name}
        </Text>
        <Text type="span" size={20} color={PALETTE['white']}>
          {data}
        </Text>
        <Text type="h3" size={12} color={PALETTE['white']}>
          {units}
        </Text>
      </li>
    );
  };

  return (
    <StyledDishCardWrap imagesrc={image}>
      <div className={styles.filter} />
      <div className={styles.addInfo}>
        <TextInCell>{time} мин</TextInCell>
        <LikeButton />
      </div>
      {/* <Image src={image} width={345} height={407} alt={name} className={styles.bgImage}/> */}
      <article className={styles.arcticleInfo}>
        <Text type="h1" size={24} weight={700} color={PALETTE['white']}>
          {name}
        </Text>
        <Text type="h2" size={12} weight={500} color={PALETTE['white']}>
          {products.join(' • ')}
        </Text>
        <ul className={styles.ulParam}>
          <ParamELemet name={'Калорийность'} data={caloric} units="ккал" />
          <ParamELemet name={'Белки'} data={protein} units="грамм" />
          <ParamELemet name={'Жиры'} data={fats} units="грамм" />
          <ParamELemet name={'Углеводы'} data={carbohydrates} units="грамм" />
        </ul>
      </article>
    </StyledDishCardWrap>
  );
};
