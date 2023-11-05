import React from 'react';
import styles from './InfoCard.module.scss';
import { Button } from '../../lib/ui/Button';
import WomenVector from '../../image/vectors/WomenVector.svg';
import WomenVectorWithBG from '../../image/vectors/WomenVectorWithBG.svg';
import ProfileWomenVector from '../../image/vectors/ProfileWomenVector.svg';

export const InfoCard = () => {
  return (
    <div className={styles.infoCardWrap}>
      <div>
        <h1 className={styles.text}>
          <span className={styles.grayText}>Узнай какое занятие</span> подойдет
          вашему ребёнку
        </h1>
        <div className={styles.bt}>
          <Button>Узнать</Button>
        </div>
      </div>

      <div className={styles.vectorWrap}>
        <img className={styles.WomenVectorWithBG} src={WomenVectorWithBG} />
        <img className={styles.WomenVector1} src={WomenVector} />
        <img className={styles.WomenVector2} src={WomenVector} />
      </div>

      <img className={styles.ProfileWomenVector} src={ProfileWomenVector} />
    </div>
  );
};
