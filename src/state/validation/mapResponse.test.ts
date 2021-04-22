import mapResponse from './mapResponse';

describe('mapResponse', () => {
  it('should map state for a 200 response', () => {
    const expected = {
      feilmeldinger: [],
      kvittering: true,
      progress: false,
      error: false,
      serverError: false
    };

    const mockFunction = jest.fn();
    mockFunction.mockReturnValue([]);

    expect(
      mapResponse(
        {
          status: 200,
          violations: []
        },
        { feilmeldinger: [] },
        mockFunction
      )
    ).toEqual(expected);
  });
  it('should map state for a 201 response', () => {
    const expected = {
      feilmeldinger: [],
      kvittering: true,
      progress: false
    };

    const mockFunction = jest.fn();
    expect(
      mapResponse(
        {
          status: 201,
          violations: []
        },
        { feilmeldinger: [] },
        mockFunction
      )
    ).toEqual(expected);
  });

  it('should map state for a 400 response', () => {
    const expected = {
      feilmeldinger: [],
      serverError: true,
      progress: false
    };

    const mockFunction = jest.fn();
    expect(
      mapResponse(
        {
          status: 400,
          violations: []
        },
        { feilmeldinger: [] },
        mockFunction
      )
    ).toEqual(expected);
  });

  it('should map state for a 401 response', () => {
    const expected = {
      feilmeldinger: [],
      notAuthorized: true,
      progress: false
    };

    const mockFunction = jest.fn();
    expect(
      mapResponse(
        {
          status: 401,
          violations: []
        },
        { feilmeldinger: [] },
        mockFunction
      )
    ).toEqual(expected);
  });

  it('should map state for a 422 response', () => {
    const expected = {
      feilmeldinger: [],
      kvittering: false,
      progress: false,
      error: false
    };

    const mockFunction = jest.fn();

    mockFunction.mockReturnValue([]);

    expect(
      mapResponse(
        {
          status: 422,
          violations: []
        },
        { feilmeldinger: [] },
        mockFunction
      )
    ).toEqual(expected);

    expect(mockFunction).toHaveBeenCalledWith(
      {
        status: 422,
        violations: []
      },
      { error: false, feilmeldinger: [], kvittering: false, progress: false }
    );
  });

  it('should map state for a 500 response', () => {
    const expected = {
      feilmeldinger: [],
      serverError: true,
      progress: false
    };

    const mockFunction = jest.fn();
    expect(
      mapResponse(
        {
          status: 500,
          violations: []
        },
        { feilmeldinger: [] },
        mockFunction
      )
    ).toEqual(expected);
  });
});
