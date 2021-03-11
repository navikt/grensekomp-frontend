import React from 'react';
import './RadNr.sass';

interface RadNrProps {
  nr: number;
}

const RadNr = (props: RadNrProps) => <div className='rad-nr'>{props.nr + 1}</div>;

export default RadNr;
