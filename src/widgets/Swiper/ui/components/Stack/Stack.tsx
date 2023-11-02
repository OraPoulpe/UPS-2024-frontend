import React, { useState, Children, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';
import { IStackProps } from './Stack.declaration';
import { Frame } from './Stack.style';

export const Stack: FC<IStackProps> = ({ onVote, children }) => {
  // const [stack, setStack] = useState<ReactNode[]>(Children.toArray(children));
  const [stack, setStack] = useState<ReactNode[]>(children);

  // return new array with last item removed
  const pop = (array: ReactNode[]) => {
    return array.filter((_, index) => {
      return index < array.length - 1;
    });
  };

  const handleVote = (item: ReactNode, vote: boolean) => {
    // update the stack
    let newStack = pop(stack);
    setStack(newStack);

    // run function from onVote prop, passing the current item and value of vote
    onVote(item, vote);
  };

  return (
    <Frame>
      {stack.map((item, index) => {
        let isTop = index === stack.length - 1;
        return (
          <Card
            drag={isTop} // Only top card is draggable
            key={index}
            onVote={(result) => handleVote(item, result)}
          >
            {item}
          </Card>
        );
      })}
    </Frame>
  );
};
