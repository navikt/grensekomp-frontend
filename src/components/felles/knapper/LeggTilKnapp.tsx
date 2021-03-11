import React from 'react';
import { Flatknapp } from 'nav-frontend-knapper';

interface LeggTilProps {
  children: any;
  onClick: any;
}

const LeggTilKnapp = (props: LeggTilProps) => (
  <Flatknapp className='leggtil-knapp' onClick={() => props.onClick()}>
    {props.children}
  </Flatknapp>
);

export default LeggTilKnapp;
