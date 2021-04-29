import BulkReducer from './BulkReducer';
import { defaultBulkState } from './BulkState';
import { Actions } from './BulkActions';
import BulkValidationResponse from '../../api/bulk/BulkValidationResponse';
import { languageInit } from '../../locales/LanguageProvider';

describe('BulkReducer', () => {
  const i18n = languageInit('nb');

  it('should throw error', () => {
    expect(() => {
      BulkReducer(defaultBulkState(), {
        type: Actions.HandleResponse,
        i18n
      });
    }).toThrow();
  });

  it('should set the fnr', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Fnr,
      i18n,
      payload: {
        fnr: '2',
        itemId: '1'
      }
    });

    expect(state.items.find((item) => item.uniqueKey === '1')!.fnr).toEqual('2');
  });

  it('should set the fnr to undefined', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Fnr,
      i18n,
      payload: {
        fnr: undefined,
        itemId: '1'
      }
    });

    expect(state.items.find((item) => item.uniqueKey === '1')!.fnr).toBeUndefined();
  });

  it('should set the orgnr', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Orgnr,
      i18n,
      payload: { orgnr: '456' }
    });
    expect(state.orgnr).toEqual('456');
  });

  it('should set the orgnr to undefined', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Orgnr,
      i18n,
      payload: { orgnr: undefined }
    });
    expect(state.orgnr).toBeUndefined();
  });

  it('should set the orgnr to empty string', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Orgnr,
      i18n,
      payload: { orgnr: '' }
    });
    expect(state.orgnr).toEqual('');
  });

  it('should set the fra to date', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Fra,
      i18n,
      payload: {
        fra: new Date('2020.06.05'),
        itemId: '1'
      }
    });

    expect(state.items.find((item) => item.uniqueKey === '1')!.fom!.value).toEqual('05.06.2020');
  });

  it('should set the fra to undefined', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Fra,
      i18n,
      payload: {
        fra: undefined,
        itemId: '1'
      }
    });

    expect(state.items.find((item) => item.uniqueKey === '1')!.fom).toBeUndefined();
  });

  it('should set the til', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Til,
      i18n,
      payload: {
        til: new Date('2020.06.05'),
        itemId: '1'
      }
    });

    expect(state.items.find((item) => item.uniqueKey === '1')!.tom!.value).toEqual('05.06.2020');
  });

  it('should set the til to undefined', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Til,
      i18n,
      payload: {
        til: undefined,
        itemId: '1'
      }
    });

    expect(state.items.find((item) => item.uniqueKey === '1')!.tom).toBeUndefined();
  });

  it('should set the beløp', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Beloep,
      i18n,
      payload: {
        beloep: '3',
        itemId: '1'
      }
    });
    expect(state.items.find((item) => item.uniqueKey === '1')!.beloep).toEqual('3');
  });

  it('should set land', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Land,
      i18n,
      payload: {
        land: 'usa',
        itemId: '1'
      }
    });
    expect(state.items.find((item) => item.uniqueKey === '1')!.land).toEqual('usa');
  });

  it('should set land to empty', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Land,
      i18n,
      payload: {
        itemId: '1'
      }
    });
    expect(state.items.find((item) => item.uniqueKey === '1')!.land).toBeUndefined();
  });

  it('should set the kvittering', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Kvittering,
      i18n,
      payload: { kvittering: true }
    });
    expect(state.kvittering).toBe(true);
  });

  it('should set the progress', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Progress,
      i18n,
      payload: { progress: true }
    });
    expect(state.progress).toBe(true);
  });

  it('should set the bekreft to undefined', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Bekreft,
      i18n,
      payload: { bekreft: undefined }
    });
    expect(state.bekreft).toBeUndefined();
  });

  it('should set the bekreft to true', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Bekreft,
      i18n,
      payload: { bekreft: true }
    });
    expect(state.bekreft).toEqual(true);
  });

  it('should set the bekreft to false', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Bekreft,
      i18n,
      payload: { bekreft: false }
    });
    expect(state.bekreft).toEqual(false);
  });

  it('should set the progress to false', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Progress,
      i18n,
      payload: { progress: false }
    });
    expect(state.progress).toEqual(false);
  });

  it('should set the progress to true', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.Progress,
      i18n,
      payload: { progress: true }
    });
    expect(state.progress).toEqual(true);
  });

  it('should validate', () => {
    let state = defaultBulkState();
    state = BulkReducer(state, {
      type: Actions.Validate,
      i18n
    });
    expect(state.validated).toBe(true);
  });

  it('should handle successful response', () => {
    let state = BulkReducer(defaultBulkState(), {
      type: Actions.HandleResponse,
      i18n,
      payload: {
        response: {
          status: 200,
          validationResponses: []
        } as BulkValidationResponse
      }
    });
    expect(state.submitting).toBe(false);
    expect(state.progress).toBe(false);
    expect(state.validated).toBe(true);
    expect(state.kvittering).toBe(true);
    expect(state.feilmeldinger.length).toBe(0);
  });

  it('should reset to defaults', () => {
    const defaultState = defaultBulkState();

    let state = BulkReducer(defaultState, { type: Actions.Reset, i18n });
    expect(state.items).not.toBeUndefined();
    expect(defaultState.items).not.toBeUndefined();
    state = BulkReducer(state, {
      type: Actions.Reset,
      i18n
    });
    expect(state).toEqual(defaultState);
    expect(state.items).toEqual([{ beloep: '', dager: '', fnr: '', uniqueKey: '1' }]);
    expect(state.orgnr).toBeUndefined();
    expect(state.progress).toBeUndefined();
    expect(state.validated).toBeUndefined();
    expect(state.kvittering).toBeUndefined();
    expect(state.bekreft).toEqual(false);
    expect(state.orgnrError).toBeUndefined();
    expect(state.bekreftError).toBeUndefined();
    expect(state.feilmeldinger?.length).toEqual(0);
  });
});
