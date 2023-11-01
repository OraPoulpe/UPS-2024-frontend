import React from 'react';
import { Stack } from './components/Stack/Stack';
import styled from 'styled-components';

export const Swiper = () => {
  const Wrapper = styled(Stack)`
    background: #1f2937;
  `;

  const Item = styled.div`
    background: #f9fafb;
    width: 200px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    text-shadow: 0 10px 10px #d1d5db;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    transform: ${() => {
      let rotation = Math.random() * (5 - -5) + -5;
      return `rotate(${rotation}deg)`;
    }};
  `;

  const Div = styled.div`
    font-family: sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    width: 100vw;
  `;

  return (
    <Div>
      <Wrapper onVote={(item, vote) => console.log(item.props, vote)}>
        <Item data-value="waffles" whileTap={{ scale: 1.15 }}>
          🧇
        </Item>
        <Item data-value="pancakes" whileTap={{ scale: 1.15 }}>
          🥞
        </Item>
        <Item data-value="donuts" whileTap={{ scale: 1.15 }}>
          🍩
        </Item>
      </Wrapper>
    </Div>
  );
};
