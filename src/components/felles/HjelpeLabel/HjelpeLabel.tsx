import Hjelpetekst from 'nav-frontend-hjelpetekst';
import React from 'react';
import './HjelpeLabel.scss';

interface HjelpeLabelProps {
  label: string;
  children: any;
}

const HjelpeLabel = (props: HjelpeLabelProps) => (
  <div className='hjelpelabel'>
    {props.label}
    <Hjelpetekst className='hjelpelabel_tekst'>
      <div className='hjelpelabel_children'>{props.children}</div>
    </Hjelpetekst>
  </div>
);

export default HjelpeLabel;
