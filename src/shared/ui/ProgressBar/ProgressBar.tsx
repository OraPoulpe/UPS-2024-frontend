import { FC } from 'react';
import { IProgressBarProps } from './ProgressBar.declaration';
import { StyledProgressBar, StyledStep } from './ProgressBar.styles';

export const ProgressBar: FC<IProgressBarProps> = ({
  numberOfSteps,
  currentStep,
}) => {
  const activeSteps = [];
  const notActiveSteps = [];

  for (let i = 1; i <= currentStep; i++) {
    activeSteps.push(<StyledStep numberOfSteps={numberOfSteps} key={i} active={true} />);
  }
  for (let i = 1; i <= numberOfSteps - currentStep; i++) {
    notActiveSteps.push(<StyledStep numberOfSteps={numberOfSteps} key={i} active={false} />);
  }
  return (
    <StyledProgressBar>
      {activeSteps}
      {notActiveSteps}
    </StyledProgressBar>
  );
};
