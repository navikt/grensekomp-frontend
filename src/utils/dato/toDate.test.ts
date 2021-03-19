import { toDate } from './toDate';
import Dato from './Dato';

describe('toDate', () => {
  it('should map toString', () => {
    expect(toDate({ year: 2020, month: 10, day: 5 } as Dato)!.getTime()).toBe(new Date(2020, 9, 5).getTime());
  });

  it('should not allow missing day', () => {
    expect(toDate({ year: 2020, month: 10 } as Dato)).toBeUndefined();
  });
  it('should not allow missing month', () => {
    expect(toDate({ year: 2020, day: 10 } as Dato)).toBeUndefined();
  });
  it('should not allow missing year', () => {
    expect(toDate({ day: 5, month: 10 } as Dato)).toBeUndefined();
  });
  it('should not allow missing', () => {
    expect(toDate({} as Dato)).toBeUndefined();
  });
});
