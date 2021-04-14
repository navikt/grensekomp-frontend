import React from 'react';
import { Select } from 'nav-frontend-skjema';
import landListe from './landListe';

interface BostedlandProps {
  label: string;
  value?: string;
  id?: string;
  disabled?: boolean;
  feilmelding?: string;
  onChange: (land: string) => void;
  className?: string;
}

const Bostedland = (props: BostedlandProps) => {
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
      {landListe.map((enhet) => (
        <option value={enhet.iso3} key={enhet.iso3}>
          {enhet.navn}
        </option>
      ))}
    </Select>
  );
};

export default Bostedland;
