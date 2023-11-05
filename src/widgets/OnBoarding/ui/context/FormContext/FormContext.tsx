import { createContext, useState, useEffect, FC, ReactNode } from 'react';

const FormContext = createContext({});

export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  interface ITitle {
    [key: number]: string;
  }
  const title: ITitle = {
    0: 'Укажите ваши финансовые возможности на приготовление одного блюда',
    1: 'Как вы оцениваете свои кулинарные способности',
    2: 'Укажите ваши приёмы пищи',
    3: 'Что бы вы выбрали на завтрак',
    4: 'На какие продукты у вас есть аллергия',
    5: 'Укажите ваши приёмы пищи',
    6: 'Что бы вы выбрали?',
  };

  const [page, setPage] = useState<number>(0);

  //

  const disablePrev = page === 0;

  const disableNext = page === 5;

  const prevHide = page === 0 && 'remove-button';

  const nextHide = page === Object.keys(title).length - 1 && 'remove-button';

  const submitHide = page !== Object.keys(title).length - 1 && 'remove-button';

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,

        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
