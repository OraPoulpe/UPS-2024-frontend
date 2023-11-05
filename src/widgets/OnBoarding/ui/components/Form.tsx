// import { PALETTE } from '@/shared/lib/constants';
// import { ProgressBar } from '@/shared/ui/ProgressBar';
// import { Text } from '@/shared/ui/Text';
// import { Button } from '@/shared/ui/buttons/Button';
// import { ChildProcess } from 'child_process';
// import React, { Children, FC } from 'react';
// import useFormContext from '../../model/hooks/useFormContext';
// import { FormStep } from './steps';

// export const Form: FC = () => {
//   const {
//     page,
//     setPage,
//     data,
//     title,
//     canSubmit,
//     disablePrev,
//     disableNext,
//     prevHide,
//     nextHide,
//     submitHide,
//   } = useFormContext();

//   const handlePrev = () => setPage((prev: number) => prev - 1);

//   const handleNext = () => setPage((prev: number) => prev + 1);

//   return (
//     <div>
//       <ProgressBar numberOfSteps={5} currentStep={page} />
//       <Text type="h1" size={24}>
//         {title[page]}
//       </Text>

//       <FormStep />

      
//       <Button onClick={handleNext}>Далее</Button>
//     </div>
//   );
// };
