import OversiktKravReducer from './OversiktKravReducer';
import { defaultOversiktKravState } from './OversiktKravState';
import { Actions } from './OversiktKravActions';
import { FetchResponse } from '../../api/fetch/FetchResponse';

describe('OversiktKravReducer', () => {
  it('should throw error', () => {
    expect(() => {
      OversiktKravReducer(defaultOversiktKravState(), {
        type: Actions.HandleResponse
      });
    }).toThrow();
  });

  it('should set the kvittering', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.Kvittering,
      payload: { kvittering: true }
    });
    expect(state.kvittering).toBe(true);
  });

  it('should set the progress', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.Progress,
      payload: { progress: true }
    });
    expect(state.progress).toBe(true);
  });

  it('should set the activtKrav to undefined', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.KravSelected,
      payload: { krav: 'krav' }
    });

    expect(state.activtKrav).toBe('krav');
  });

  it('should set the activtKrav to true', () => {
    let state = OversiktKravReducer(defaultOversiktKravState(), {
      type: Actions.KravUnselected
    });
    expect(state.activtKrav).toBeUndefined();
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
