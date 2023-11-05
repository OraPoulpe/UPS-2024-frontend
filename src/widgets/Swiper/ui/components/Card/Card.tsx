'use client';

import React, { useRef, useEffect, useState, KeyboardEvent, FC } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import { StyledCard } from './Card.style';
import { ICardProps, TDirection } from './Card.declaration';
import { LEFT_DIRECTION, RIGHT_DIRECTION } from './Card.constants';

export const Card: FC<ICardProps> = ({ children, onVote, drag }) => {
  const cardElem: React.RefObject<HTMLDivElement> = useRef(null);

  const x = useMotionValue(0);
  const controls = useAnimation();

  const [constrained, setConstrained] = useState<boolean>(true);

  const [direction, setDirection] = useState<TDirection>(undefined);

  const [velocity, setVelocity] = useState<number>(0);

  const [test, setTest] = useState<boolean>(false);

  const getVote = (childNode: HTMLElement, parentNode: HTMLElement | null) => {
    const childRect = childNode.getBoundingClientRect();

    if (parentNode !== null) {
      const parentRect = parentNode.getBoundingClientRect();
      const centerChild = (childRect.left + childRect.right) / 2;
      const centerParent = (parentRect.left + parentRect.right) / 2;
      // console.log("chiled",(childRect.left+childRect.right)/2)
      // console.log('chiled', childRect.width);
      // console.log('pare', parentRect.right);
      let result =
        centerChild <= parentRect.right / 2 - childRect.width + 80
          ? false
          : centerChild >= parentRect.right / 2 + childRect.width - 80
          ? true
          : undefined;
      return result;
    }
    return undefined;
  };

  // determine direction of swipe based on velocity
  const getDirection = () => {
    // console.log('velg', velocity);

    return velocity >= 1
      ? RIGHT_DIRECTION
      : velocity <= -1
      ? LEFT_DIRECTION
      : undefined;
  };

  const getTrajectory = () => {
    setVelocity(x.getVelocity());
    setDirection(getDirection());
  };

  const flyAwayDistance = (direction: TDirection) => {
    const parentElement = cardElem.current?.parentNode as HTMLElement | null;
    const childElement = cardElem.current as HTMLElement;
    if (!parentElement) {
      return 0;
    }
    const parentWidth = parentElement.getBoundingClientRect().width;
    const childWidth = childElement.getBoundingClientRect().width;
    return direction === LEFT_DIRECTION
      ? -parentWidth / 2 - childWidth / 2
      : parentWidth / 2 + childWidth / 2;
  };

  const flyAway = (min: number) => {
    console.log('direction before', direction);
    console.log('velocity', velocity);
    if (Math.abs(velocity) > min) {
      setConstrained(false);
      // cardElem.current && console.log(direction);
      console.log('controls start', velocity);
      setTest(true);
      console.log('test', test);
      controls.start({
        x: flyAwayDistance(direction),
        speed: velocity,
      });
    }
  };

  console.log("direction always", direction);


  useEffect(() => {
    //TODO: optimize render
    // cardElem.current?.focus();
    const unsubscribeX = x.onChange(() => {
      if (cardElem.current) {
        const childNode = cardElem.current;
        const parentNode = cardElem.current.parentNode as HTMLElement;
        const result = getVote(childNode, parentNode);
        result !== undefined && onVote(result);
      }
    });
    return () => unsubscribeX();
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      controls.start({
        x: flyAwayDistance('right'),
      });
    } else if (e.key === 'ArrowLeft') {
      controls.start({
        x: flyAwayDistance('left'),
      });
    }
  };

  return (
    <StyledCard
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        handleKeyDown(e);
      }}
      animate={controls}
      // dragSnapToOrigin
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      ref={cardElem}
      style={{ x }}
      onDrag={getTrajectory}
      onDragEnd={() => flyAway(10)}
      // whileTap={{ scale: 1.1 }}
      drag={drag ? 'x' : false}
    >
      
      {children}
    </StyledCard>
  );
};
