import React from 'react';
import styles from './Search.module.scss';
import SearchIcon from '../../image/icons/SearchIcon.svg';
import { Button } from '../../lib/ui/Button';
import { Input } from '../../lib/ui/Input/Input';

export const Search = () => {
  return (
    <div className={styles.searchWrap}>
      <div className={styles.inputWrap}>
        <img className={styles.searchIcon} src={SearchIcon} />
        <Input placeholder="Введите название секции или кружка" />
      </div>
      <Button>Найти</Button>
    </div>
  );
};
