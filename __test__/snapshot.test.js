import { getCharacter } from '../snapshot';
import rick from '../rick.json';


describe("Its time for Snapshots", () => {
test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

test('Siempre fallara la instantanea', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20)
    };

    expect(getCharacter(user)).toMatchSnapshot();
  });

  test('Tenemos una excepcion de un valor dentro del codigo', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: 'Cesar Rivas'
    };

    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    });
  });
});