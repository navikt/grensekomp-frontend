import { RefusjonskravStatus } from '../state/oversikt-krav/OversiktKravItem';

const mockKravSammendragItems = [
  {
    identitetsnummer: '29019015139',
    periode: {
      fom: '2021-04-01',
      tom: '2021-04-08',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 0.0
    },
    bostedland: 'IRL',
    status: RefusjonskravStatus.MOTTATT,
    opprettet: '2021-04-08T17:28:59.020252',
    id: '3f5b9167-c740-44aa-a49c-0bfb3e8562d6',
    kvitteringId: 'ff36cb84-f0a0-46de-9a3c-7e74dabfdc5f'
  },
  {
    identitetsnummer: '24058219491',
    periode: {
      fom: '2021-04-01',
      tom: '2021-04-02',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 0.0
    },
    bostedland: 'LIE',
    status: RefusjonskravStatus.MOTTATT,
    opprettet: '2021-04-08T17:28:59.020252',
    id: '7a1af008-9339-457d-b386-4ec037f24d0e',
    kvitteringId: 'a9562e4d-a021-42e5-aa7d-040de365e51f'
  },
  {
    identitetsnummer: '24058219491',
    periode: {
      fom: '2021-04-01',
      tom: '2021-04-04',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 0.0
    },
    bostedland: 'BGR',
    status: RefusjonskravStatus.MOTTATT,
    opprettet: '2021-04-08T16:27:33.738093',
    id: '49c13288-4bde-4bb2-9132-1e2616ca0ce8',
    kvitteringId: '37003ef0-aa13-4a99-beb9-83efb59393eb'
  },
  {
    identitetsnummer: '26077025269',
    periode: {
      fom: '2021-04-01',
      tom: '2021-04-04',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 0.0
    },
    bostedland: 'DNK',
    status: RefusjonskravStatus.MOTTATT,
    opprettet: '2021-04-08T16:53:34.054712',
    id: 'fe37085c-0535-430e-9d8e-6f609f24ab90',
    kvitteringId: 'ff36cb84-f0a0-46de-9a3c-7e74dabfdc5f'
  },
  {
    identitetsnummer: '20128121189',
    periode: {
      fom: '2021-03-09',
      tom: '2021-03-15',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 2.0
    },
    bostedland: 'SWE',
    status: RefusjonskravStatus.MOTTATT,
    oppgaveId: '331154755',
    opprettet: '2021-04-13T14:40:21.0655',
    id: '66e1f997-4da1-4f55-a2b3-ba1cfb0124aa',
    kvitteringId: '694529c5-6140-47f7-b80e-aa5595e617f4'
  },
  {
    identitetsnummer: '02127722067',
    periode: {
      fom: '2021-03-09',
      tom: '2021-03-15',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 2.0
    },
    bostedland: 'SWE',
    status: RefusjonskravStatus.MOTTATT,
    oppgaveId: '331154894',
    opprettet: '2021-04-14T15:08:24.076688',
    id: '9c0f48ae-0969-4303-a97f-38b899ad9350',
    kvitteringId: 'd86c6f7e-d7b6-4865-8b5b-181555d4eefa'
  },
  {
    identitetsnummer: '20128121189',
    periode: {
      fom: '2021-03-09',
      tom: '2021-03-15',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 2.0
    },
    bostedland: 'SWE',
    status: RefusjonskravStatus.MOTTATT,
    oppgaveId: '331154877',
    opprettet: '2021-04-14T13:18:50.349963',
    id: '78870f39-b272-4b19-8261-9b3dffa99ee7',
    kvitteringId: 'd70ff87a-e870-402c-8044-1a3b94fb52b5'
  },
  {
    identitetsnummer: '20128121189',
    periode: {
      fom: '2021-03-09',
      tom: '2021-03-15',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 2.0
    },
    bostedland: 'SWE',
    status: RefusjonskravStatus.MOTTATT,
    oppgaveId: '331154874',
    opprettet: '2021-04-14T12:47:31.465228',
    id: 'cf52af1c-1212-4205-a680-29d577e61beb',
    kvitteringId: 'a46186d4-eb96-42b3-9091-ba521321953e'
  },
  {
    identitetsnummer: '20128121189',
    periode: {
      fom: '2021-04-01',
      tom: '2021-04-08',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 2500.0
    },
    bostedland: 'BEL',
    status: RefusjonskravStatus.MOTTATT,
    opprettet: '2021-04-15T09:59:24.96258',
    id: '9e7e6176-4b44-4ca4-aafd-de0397aa10e6',
    kvitteringId: 'ef5c894c-72a3-4687-84a4-ca531c99984c'
  },
  {
    identitetsnummer: '20128121189',
    periode: {
      fom: '2021-04-01',
      tom: '2021-04-10',
      antallDagerMedRefusjon: 3,
      beregnetMånedsinntekt: 125.0
    },
    bostedland: 'BEL',
    status: RefusjonskravStatus.MOTTATT,
    opprettet: '2021-04-15T10:02:00.93678',
    id: '6fd6b437-2978-478e-b2b3-e5bfb8672c1a',
    kvitteringId: 'ff8edc94-a6ea-4162-961e-a461c09c8efe'
  }
];

export default mockKravSammendragItems;
