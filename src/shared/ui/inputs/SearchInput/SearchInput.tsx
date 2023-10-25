import { SearchIcons } from '../../icons/SearchIcon';
import { TextInput } from '../TextInput';
import { StyledSearchInput } from './SearchInput.style';

export const SearchInput = () => {
  return (
    <StyledSearchInput>
      <SearchIcons />
      <TextInput
        name="username"
        type={'text'}
        placeholder={'Логин'}
        onChange={() => {}}
        value={''}
      />
    </StyledSearchInput>
  );
};
