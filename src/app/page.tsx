'use client';

import { OneRadioGroup } from '@/shared/ui/inputs/RadioGroup';
import { IOption } from '@/shared/ui/inputs/RadioGroup/RadioGroup.declaration';
import { CheckboxGroup } from '@/shared/ui/inputs/CheckboxGroup';
import { RangeInput } from '@/shared/ui/inputs/RangeInput';
import Image from 'next/image';
import Slider from 'rc-slider';
import { useState } from 'react';

export default function Home() {
  const [test, setTest] = useState([300, 700]);

  const OptionsData: IOption[] = [
    {
      id: 1,
      text: 'Я не очень умею готовить, смогу приготовить простые блюда',
    },
    {
      id: 2,
      text: 'Я уже неплохо разбираюсь на кухне, умею готовить средние рецепты, но что-то сложное - не для меня',
    },
    {
      id: 3,
      text: 'Я хорошо умею готовить, переодически готовлю сложные блюда',
    },
    {
      id: 4,
      text: 'Я - шеф-повар, умею готовить блюда любой сложности, уверенно чувствую себя на кухне',
    },
  ];

  const Intakes: IOption[] =  [
    {
      id: 1,
      text: 'Завтрак',
    },
    {
      id: 2,
      text: 'Обед',
    },
    {
      id: 3,
      text: 'Ужин',
    },
    {
      id: 4,
      text: 'Перекус',
    },
  ]

  const [radio, setRadio] = useState<IOption>();

  const handleOnChange = (value: any) => {
    setRadio(value);
  };

  // console.log(radio)
  // console.log(radio)
  return (
    <main>
      Main Page
      <div className="w-160">
        {/* <RangeInput min={150} max={2000} value={test} onChange={setTest} /> */}
      </div>
      {/* <OneRadioGroup options={OptionsData} value={radio} onChange={handleOnChange}/> */}
      <CheckboxGroup options={Intakes}/>
    </main>
  );
}
