import { ChangeEvent, FC, useState } from 'react';
import { SearchInput } from '../SearchInput';
import { ITagsInputProps } from './TagsInput.declaration';
import { StyledListVariants, StyledVariant } from './TagsInput.style';

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
    console.log(isAlreadyAdded);
    if (!isAlreadyAdded) {
      setSelects([...selects, newTag]);
    }
  };

  return (
    <>
      <SearchInput onChange={handleChange} />
      <div>
        {selects.length != 0 ? (
          selects.map((product) => (
            <button onClick={() => removeSelects(product.name, product.id)}>
              {product.name}
            </button>
          ))
        ) : (
          <></>
        )}
      </div>
      <StyledListVariants>
        {filteredData.length !== 0 && valueInput !== '' ? (
          filteredData.map((product) => (
            <StyledVariant>
              {product.name}
              {selects.some((p) => p.id === product.id) ? ' выбран' : 'нет'}
              <button onClick={() => addSelect(product.name, product.id)}>
              </button>
            </StyledVariant>
          ))
        ) : (
          <h3>
            Это ваш холодильник, выберите продукты которые у вас есть чтобы
            рекомендации блюд были максимально удобными и точными для вас
          </h3>
        )}
      </StyledListVariants>
    </>
  );
};
