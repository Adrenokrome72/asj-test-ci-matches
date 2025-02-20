import sortHeroes from '../src/sortHeroes';

describe('Sort Heroes', () => {
  test('sorts correctly', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 }
    ];
    
    expect(sortHeroes(input)).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 }
    ]);
  });

  test('immutability check', () => {
    const original = [{ health: 20 }, { health: 50 }];
    const copy = [...original];
    sortHeroes(original);
    expect(original).toEqual(copy);
  });
});