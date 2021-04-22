import OversiktKravReducer from './OversiktKravReducer';
import { defaultOversiktKravState } from './OversiktKravState';
import { Actions } from './OversiktKravActions';
import { FetchResponse } from '../../api/fetch/FetchResponse';
import { RefusjonskravStatus } from './OversiktKravItem';

describe('OversiktKravReducer', () => {
  it('should throw error', () => {
    expect(() => {
      OversiktKravReducer(defaultOversiktKravState(), {
        type: Actions.HandleResponse
      });
    }).toThrow();
  });

  it('should set the progress', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.Progress,
      payload: { progress: true }
    });
    expect(state.progress).toBe(true);
  });

  it('should set notAuthorized to false', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.NotAuthorized
    });
    expect(state.notAuthorized).toBe(false);
  });

  it('should set the aktivtKrav to undefined', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.KravSelected,
      payload: { krav: 'krav' }
    });

    expect(state.aktivtKrav).toBe('krav');
  });

  it('should set the aktivtKrav to true', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.KravUnselected
    });
    expect(state.aktivtKrav).toBeUndefined();
  });

  it('should set the progress to false', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.Progress,
      payload: { progress: false }
    });
    expect(state.progress).toEqual(false);
  });

  it('should set the progress to true', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.Progress,
      payload: { progress: true }
    });
    expect(state.progress).toEqual(true);
  });

  it('should handle successful response', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.HandleResponse,
      payload: {
        response: {
          status: 200,
          json: []
        } as FetchResponse
      }
    });
    expect(state.submitting).toBe(false);
    expect(state.progress).toBe(false);
    expect(state.validated).toBe(true);
    expect(state.kvittering).toBe(true);
    expect(state.feilmeldinger.length).toBe(0);
  });

  it('should handle unsuccessful response', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.HandleResponse,
      payload: {
        response: {
          status: 401,
          json: []
        } as FetchResponse
      }
    });
    expect(state.notAuthorized).toBe(true);
    expect(state.progress).toBe(false);
    expect(state.submitting).toBe(false);

    expect(state.feilmeldinger.length).toBe(0);
  });

  it('should handle response error', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.HideServerError
    });
    expect(state.serverError).toBe(false);
  });

  it('should handle set state to close server error', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.HandleResponseError
    });
    expect(state.serverError).toBe(true);
  });

  it('should delete an item', () => {
    const defaultItems = defaultOversiktKravState();
    defaultItems.items = [
      {
        id: '1',
        identitetsnummer: '1',
        periode: { fom: '2002-01-02', tom: '2002-01-03', antallDagerMedRefusjon: 2, beregnetMånedsinntekt: 101 },
        bostedland: 'SWE',
        opprettet: 'now',
        kvitteringId: '1',
        status: RefusjonskravStatus.MOTTATT
      },
      {
        id: '5',
        identitetsnummer: '5',
        periode: { fom: '2002-01-02', tom: '2002-01-03', antallDagerMedRefusjon: 2, beregnetMånedsinntekt: 101 },
        bostedland: 'SWE',
        opprettet: 'now',
        kvitteringId: '5',
        status: RefusjonskravStatus.MOTTATT
      }
    ];

    const expected = [
      {
        id: '1',
        identitetsnummer: '1',
        periode: { fom: '2002-01-02', tom: '2002-01-03', antallDagerMedRefusjon: 2, beregnetMånedsinntekt: 101 },
        bostedland: 'SWE',
        opprettet: 'now',
        kvitteringId: '1',
        status: RefusjonskravStatus.MOTTATT
      },
      {
        id: '5',
        identitetsnummer: '5',
        periode: { fom: '2002-01-02', tom: '2002-01-03', antallDagerMedRefusjon: 2, beregnetMånedsinntekt: 101 },
        bostedland: 'SWE',
        opprettet: 'now',
        kvitteringId: '5',
        status: RefusjonskravStatus.SLETTET
      }
    ];

    let state = OversiktKravReducer(defaultItems, {
      type: Actions.SlettItem,
      payload: {
        response: {
          status: 200,
          json: {
            id: '5',
            status: RefusjonskravStatus.SLETTET
          }
        } as FetchResponse
      }
    });

    expect(state.items).toEqual(expected);
  });

  it('should fail the delete item command if payload is missing', async () => {
    expect(() =>
      OversiktKravReducer(defaultOversiktKravState(), {
        type: Actions.SlettItem
      })
    ).toThrow();
  });

  it('should fail on invalid action', async () => {
    expect(() =>
      OversiktKravReducer(defaultOversiktKravState(), {
        type: 'InvalidAction'
      })
    ).toThrow();
  });

  it('should handle unsuccessful delete request', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.SlettItem,
      payload: {
        response: {
          status: 401,
          json: []
        } as FetchResponse
      }
    });
    expect(state.notAuthorized).toBe(true);
    expect(state.progress).toBe(false);
    expect(state.submitting).toBe(false);

    expect(state.feilmeldinger.length).toBe(0);
  });

  it('should reset to defaults', () => {
    const defaultState = defaultOversiktKravState();
    let state = OversiktKravReducer(defaultState, { type: Actions.Reset });
    expect(state.items).toBeUndefined();
    expect(defaultState.items).toBeUndefined();
    state = OversiktKravReducer(state, {
      type: Actions.Reset
    });
    expect(state).toEqual(defaultState);
    expect(state.items).toBeUndefined();
    expect(state.orgnr).toBeUndefined();
    expect(state.validated).toBeUndefined();
    expect(state.kvittering).toBeUndefined();
    expect(state.bekreft).toEqual(false);
    expect(state.orgnrError).toBeUndefined();
    expect(state.bekreftError).toBeUndefined();
    expect(state.feilmeldinger?.length).toEqual(0);
  });
});
