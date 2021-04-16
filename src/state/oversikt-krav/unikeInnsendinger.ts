import OversiktKravItem from './OversiktKravItem';

const unikeInnsendinger = (krav: OversiktKravItem[]) => {
  const innsendinger = krav.map((enkeltkrav) => enkeltkrav.opprettet);

  return innsendinger.filter((innsending, index) => innsendinger.indexOf(innsending) === index);
};

export default unikeInnsendinger;
