import React, { SyntheticEvent } from 'react';

import { NumberViewerContainer, NumberSetterContainer } from './components';

interface FormProps {
  name: string;
  id: number;
}

export const Form = ({ name, id }: FormProps) => {
  const handleClick = (e: SyntheticEvent) => {
    console.log(e.target);
  };

  return (
    <>
      <>Form</>
      {id}
      <button type="button" onClick={handleClick} name={name}>
        click
      </button>

      <NumberSetterContainer />
      <NumberViewerContainer />
    </>
  );
};
