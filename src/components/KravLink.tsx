import React from 'react';
import { Link } from 'react-router-dom';
import lenker from '../config/lenker';

export const buildKraveState = (fnr: string, land: string, beloep: string) => {
  return {
    fnr,
    beloep,
    land
  };
};

export const buildKravLink = (fnr: string, land: string, beloep: string) => ({
  pathname: lenker.Bulkinnsending2,
  state: buildKraveState(fnr, land, beloep)
});

export interface KravLinkProps {
  fnr: string;
  land: string;
  beloep: string;
}

const KravLink = ({ fnr, land, beloep }: KravLinkProps) => {
  return <Link to={buildKravLink(fnr, land, beloep)}>Fyll ut nytt krav</Link>;
};

export default KravLink;
