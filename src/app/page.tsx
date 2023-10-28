'use client';

import { OneRadioGroup } from '@/shared/ui/inputs/RadioGroup';
import { IOption } from '@/shared/ui/inputs/RadioGroup/RadioGroup.declaration';
import { CheckboxGroup } from '@/shared/ui/inputs/CheckboxGroup';
import { RangeInput } from '@/shared/ui/inputs/RangeInput';
import Image from 'next/image';
import Slider from 'rc-slider';
import { useState } from 'react';

import br_1 from '../../public/data/images/food/breakfast/br_1.png';
import br_2 from '../../public/data/images/food/breakfast/br_2.png';
import br_3 from '../../public/data/images/food/breakfast/br_3.png';
import tea from '../../public/data/images/food/tea.png';
import { ImageChoice } from '@/shared/ui/inputs/ImageChoice';
import {
  IImage,
  IImageChoiceProps,
} from '@/shared/ui/inputs/ImageChoice/ImageChoice.declaration';
import { ImageCell } from '@/shared/ui/Card/ImageCell';
import { TextInput } from '@/shared/ui/inputs/TextInput';
import { SearchInput } from '@/shared/ui/inputs/SearchInput';
import { TagsInput } from '@/shared/ui/inputs/TagsInput';
import { products } from '../../public/data/products/products';
import { NavBar } from '@/widgets/NavBar';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { Button } from '@/shared/ui/buttons/Button';
import { Toggle } from '@/shared/ui/inputs/Toggle';

// import googleIc from '../../public/icons/GoogleIcon.svg';
import IconSettings from '../../public/icons/IconSetting.svg';
import { IconButton } from '@/shared/ui/buttons/IconButton';

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

  const Intakes: IOption[] = [
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
  ];

  const [radio, setRadio] = useState<IOption>();

  const handleOnChange = (value: any) => {
    setRadio(value);
  };

  // console.log(radio)
  // console.log(radio)

  const images: IImage[] = [
    { src: tea.src, name: 'Йогурт', id: 10 },
    { src: br_1.src, name: 'Йогурт', id: 1 },
    { src: br_2.src, name: 'Йогурт', id: 2 },
    { src: br_3.src, name: 'Йогурт', id: 3 },
    { src: br_3.src, name: 'Йогурт', id: 4 },
    { src: br_3.src, name: 'Йогурт', id: 5 },
    { src: br_3.src, name: 'Йогурт', id: 6 },
  ];

  return (
    <div>
      Main Page
      <div className="w-160">
        {/* <RangeInput min={150} max={2000} value={test} onChange={setTest} /> */}
      </div>
      {/* <OneRadioGroup options={OptionsData} value={radio} onChange={handleOnChange}/> */}
      {/* <CheckboxGroup options={Intakes}/> */}
      {/* <ImageChoice images={images} width={107} height={107} /> */}
      {/* <ImageCell image={images[0]} width={335} height={107} checkbox /> */}
      {/* <TagsInput data={products}/> */}
      {/* <ProgressBar numberOfSteps={10} currentStep={4} /> */}
      {/* <Button onClick={() => {}} variant='secondary'>Folow<Image src={googleIc} alt={''}/></Button> */}

      <IconButton onClick={() => {}}><Image src={IconSettings} alt={''}/></IconButton>
      <Toggle />
    </div>
  );
}
