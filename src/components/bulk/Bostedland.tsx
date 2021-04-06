import React from 'react';
import { Select } from 'nav-frontend-skjema';
import landListe from '../../utils/landListe';

interface BostedlandProps {
  label: string;
  id?: string;
  disabled?: boolean;
  feilmelding?: string;
  onChange: (fnr: string) => void;
  onValidate?: (valid: boolean) => void;
}

const Bostedland = (props: BostedlandProps) => {
  return (
    <Select
      id={props.id}
      feil={props.feilmelding}
      label={props.label}
      disabled={props.disabled}
      onChange={(evt) => props.onChange(evt.target.value)}
    >
      <option>Velg land:</option>
      {landListe.map((enhet) => (
        <option value={enhet.iso3} key={enhet.iso3}>
          {enhet.navn}
        </option>
      ))}
      <option>Øvrige land</option>
    </Select>
  );
};

export default Bostedland;
