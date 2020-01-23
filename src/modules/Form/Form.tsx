import React, { SyntheticEvent } from 'react';

interface FormProps {
  name: string;
  id: number;
}

const Form: React.FC<FormProps> = ({ name, id }) => {
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
    </>
  );
};

export default Form;
