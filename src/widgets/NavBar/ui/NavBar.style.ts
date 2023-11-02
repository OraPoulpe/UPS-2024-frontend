// export const StyledLabel = styled.

import Link from 'next/link';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledNavBar = styled.footer`
  position: fixed;
  bottom: 0px;
  display: flex;
  height: 10%;
  width: 100%;
  justify-content: space-around;
  padding: 15px 15px 25px 15px;
`;
