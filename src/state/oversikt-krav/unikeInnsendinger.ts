import OversiktKravItem, { RefusjonskravStatus } from './OversiktKravItem';

const unikeInnsendinger = (krav: OversiktKravItem[]) => {
  const filteredKrav = krav.filter((krav) => krav.status !== RefusjonskravStatus.SLETTET);
  const innsendinger = filteredKrav.map((enkeltkrav) => enkeltkrav.opprettet);

  return innsendinger.filter((innsending, index) => innsendinger.indexOf(innsending) === index);
};

export default unikeInnsendinger;
