import React from 'react';
import './RadNr.sass';

interface RadNrProps {
  nr: number;
  className?: string;
}

const RadNr = (props: RadNrProps) => <div className={'rad-nr ' + props.className ?? ''}>{props.nr}</div>;

export default RadNr;
