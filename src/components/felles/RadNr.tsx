import React from 'react';
import './RadNr.sass';

interface RadNrProps {
  nr: number;
}

const RadNr = (props: RadNrProps) => <div className='rad-nr'>{props.nr}</div>;

export default RadNr;
