import { ChangeEvent, FC, useState } from 'react';
import { SearchInput } from '../SearchInput';
import { ITagsInputProps } from './TagsInput.declaration';
import {
  StyledButtonAdd,
  StyledListVariants,
  StyledSelect,
  StyledSelectsWrap,
  StyledTagsInput,
  StyledTextWrap,
} from './TagsInput.style';
import { PALETTE } from '@/shared/lib/constants/palette';
import { Text } from '../../Text';
import { PlusIcon } from '../../icons/PlusIcon';
import { CrossIcon } from '../../icons/CrossIcon';

interface IProduct {
  id: number;
  name: string;
}

export const TagsInput: FC<ITagsInputProps> = ({ data }) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [selects, setSelects] = useState<IProduct[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setValueInput(input.value);
  };

  const filteredData =
    valueInput === ''
      ? data
      : data.filter((product) =>
          product.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(valueInput.toLowerCase().replace(/\s+/g, ''))
        );

  const removeSelects = (name: string, id: number) => {
    const newTag = {
      id,
      name,
    };
    setSelects([...selects.filter((product) => product.id !== id)]);
  };

  const addSelect = (name: string, id: number) => {
    const newTag = {
      id,
      name,
    };

    const isAlreadyAdded = selects.some((product) => product.id === id);
    if (!isAlreadyAdded) {
      setSelects([...selects, newTag]);
    }
  };

  return (
    <StyledTagsInput>
      <SearchInput onChange={handleChange} />
      <StyledSelectsWrap>
        {selects.length != 0 &&
          selects.map((sel, index) => (
            <StyledSelect key={index}>
              {sel.name}
              <button onClick={() => removeSelects(sel.name, sel.id)}>
                <CrossIcon />
              </button>
            </StyledSelect>
          ))}
      </StyledSelectsWrap>

      <StyledTextWrap>
        {valueInput === '' && selects.length === 0 ? (
          <Text type={'p'} size={14}>
            Это ваш холодильник, выберите продукты которые у вас есть чтобы
            рекомендации блюд были максимально удобными и точными для вас
          </Text>
        ) : (
          filteredData.length === 0 && (
            <Text type={'h1'} size={16}>
              К сожелению, у мы не знаем такого продукта
            </Text>
          )
        )}
      </StyledTextWrap>

      {filteredData.length !== 0 && valueInput !== '' && (
        <StyledListVariants>
          {filteredData.map((variant) => (
            <StyledButtonAdd
              key={variant.id}
              onClick={() => addSelect(variant.name, variant.id)}
            >
              {variant.name}

              {selects.some((p) => p.id === variant.id) ? (
                <button onClick={() => removeSelects(variant.name, variant.id)}>
                  <CrossIcon />
                </button>
              ) : (
                <PlusIcon />
              )}
            </StyledButtonAdd>
          ))}
        </StyledListVariants>
      )}
    </StyledTagsInput>
  );
};
