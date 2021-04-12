import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import './SlettKravKnapp.scss';

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
}

const Slettknapp = ({ onClick, disabled }: SlettknappProps) => {
  return (
    <Knapp onClick={onClick} className={'slett-krav-knapp lenke'} disabled={disabled}>
      <DeleteIcon />
      &nbsp;Slett
    </Knapp>
  );
};

export default Slettknapp;