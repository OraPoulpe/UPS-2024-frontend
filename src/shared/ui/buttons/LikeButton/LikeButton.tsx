import { Children, FC, useState } from 'react';
import { StyledBG, StyledLikeButton } from './LikeButton.style';
import { LikeIcon } from './icons/LikeIcon';

export const LikeButton: FC = () => {

  const [active, setActive] = useState<boolean>(false);
  return (
    <StyledLikeButton onClick={()=> setActive(!active)}>
      <StyledBG/>
      <LikeIcon active={active} />
    </StyledLikeButton>
  );
};
