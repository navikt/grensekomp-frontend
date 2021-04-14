import React from 'react';
import { FnrInput } from 'nav-frontend-skjema';

interface FnrProps {
  label: string;
  fnr?: string;
  id?: string;
  disabled?: boolean;
  feilmelding?: string;
  placeholder: string;
  className?: string;
  onChange: (fnr: string) => void;
  onValidate?: (valid: boolean) => void;
}

const Fnr = (props: FnrProps) => {
  return (
    <FnrInput
      className={props.className}
      value={props.fnr}
      placeholder={props.placeholder}
      id={props.id}
      disabled={props.disabled}
      label={props.label}
      onValidate={(valid) => (props.onValidate ? props.onValidate(valid) : null)}
      onChange={(evt) => props.onChange(evt.target.value)}
      feil={props.feilmelding}
    />
  );
};

export default Fnr;
