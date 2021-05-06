import React from 'react';
import { Select } from 'nav-frontend-skjema';
import landListe, { Land, otherCountry } from './landListe';

interface BostedlandProps {
  label: string;
  language: string;
  value?: string;
  id?: string;
  disabled?: boolean;
  feilmelding?: string;
  onChange: (land: string) => void;
  className?: string;
}

const Bostedland = (props: BostedlandProps) => {
  const sortedLandListe: Land[] = landListe.sort((a, b) => a[props.language] - b[props.language]);
  return (
    <Select
      id={props.id}
      feil={props.feilmelding}
      label={props.label}
      disabled={props.disabled}
      value={props.value}
      onChange={(evt) => props.onChange(evt.target.value)}
      className={props.className}
    >
      <option>Velg land:</option>
      {sortedLandListe.map((enhet) => (
        <option value={enhet.iso3} key={enhet.iso3}>
          {enhet[props.language]}
        </option>
      ))}
      <option value={otherCountry.iso3}>{otherCountry[props.language]}</option>
    </Select>
  );
};

export default Bostedland;
