import postRequest from './postRequest';
import mockFetch from '../../mockData/mockFetch';
import HttpStatus from '../HttpStatus';
import { ValidationProblemDetail } from '../../state/validation/ValidationResponse';

describe('postRequest', () => {
  it('should catch BadRequest', async () => {
    mockFetch(400, {});

    expect(await postRequest('dummy', {})).toEqual({
      status: 400,
      validationResponses: []
    });
  });

  it('should catch exceptions', async () => {
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.reject());
    expect(await postRequest('/Path', {})).toEqual({
      status: 500,
      validationResponses: []
    });
  });

  it('should resolve with status 200 if the backend responds with 200', async () => {
    mockFetch(200, []);
    expect(await postRequest('/Path', {})).toEqual({
      status: 200,
      validationResponses: []
    });
  });

  it('should reject with status Unauthorized if the backend responds with 401', async () => {
    mockFetch(401, 'You shall not pass!');
    expect(await postRequest('/Path', {})).toEqual({
      status: 401,
      validationResponses: []
    });
  });

  it('should reject with status Error if the backend responds with 500', async () => {
    mockFetch(500, 'Backend made booboo!');
    expect(await postRequest('/Path', {})).toEqual({
      status: 500,
      validationResponses: []
    });
  });

  it('should reject with status Unknown if the backend responds with an unknown response', async () => {
    mockFetch(505, []);
    expect(await postRequest('/Path', {})).toEqual({
      status: 505,
      validationResponses: []
    });
  });

  it('should reject with status Timeout if the backend does not respond', async () => {
    jest.useFakeTimers();
    mockFetch(-33, []);
    const resultat = postRequest('/Path', {});
    jest.advanceTimersByTime(15000);
    expect(await resultat).toEqual({
      status: HttpStatus.Timeout,
      validationResponses: []
    });
    jest.useRealTimers();
  });

  it('should pass on the violation when the server responds with 422', async () => {
    const expected = [
      {
        status: 422,
        validationResponses: [
          {
            validationType: 'RefusjonsdagerKanIkkeOverstigePeriodelengdenConstraint',
            message: '',
            propertyPath: 'periode',
            invalidValue: {
              fom: '2021-02-01',
              tom: '2021-02-02',
              antallDagerMedRefusjon: 9,
              beloep: 123.0
            }
          }
        ]
      }
    ];

    const response = [
      {
        status: 422,
        validationErrors: [
          {
            validationType: 'RefusjonsdagerKanIkkeOverstigePeriodelengdenConstraint',
            message: '',
            propertyPath: 'periode',
            invalidValue: {
              fom: '2021-02-01',
              tom: '2021-02-02',
              antallDagerMedRefusjon: 9,
              beloep: 123.0
            }
          } as ValidationProblemDetail
        ]
      }
    ];
    mockFetch(422, response);
    expect(await postRequest('/Path', {})).toEqual({
      status: 422,
      validationResponses: expected
    });
  });
});
