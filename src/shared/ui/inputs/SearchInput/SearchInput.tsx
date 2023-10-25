import { FC } from 'react';
import { SearchIcons } from '../../icons/SearchIcon';
import { TextInput } from '../TextInput';
import { StyledSearchInput } from './SearchInput.style';
import { ISearchInputProps } from './SearchInput.declaration';

export const SearchInput: FC<ISearchInputProps> = ({ onChange }) => {
  return (
    <StyledSearchInput>
      <SearchIcons />
      <TextInput
        name="username"
        type={'text'}
        placeholder={'Логин'}
        onChange={onChange}
        value={''}
      />
    </StyledSearchInput>
  );
};
