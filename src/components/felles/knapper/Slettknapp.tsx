import React from 'react';
import { Fareknapp } from 'nav-frontend-knapper';
import './Slettknapp.sass';

const DeleteIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path
      d='m12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm4.9
    13.5-1.4 1.4-3.5-3.5-3.5 3.5-1.4-1.4 3.5-3.5-3.5-3.5 1.4-1.4 3.5 3.5 3.5-3.5 1.4 1.4-3.5 3.5 3.5 3.5z'
    />
  </svg>
);

interface SlettknappProps {
  onClick: any;
  disabled?: boolean;
  label: string;
}

const Slettknapp = ({ onClick, disabled, label }: SlettknappProps) => {
  return (
    <Fareknapp onClick={onClick} className={'slett-knapp'} disabled={disabled}>
      <DeleteIcon />
      &nbsp;{label}
    </Fareknapp>
  );
};

export default Slettknapp;
