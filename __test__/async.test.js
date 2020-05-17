/**
 * @jest-environment node
 */

import { getDataFromApi, getDataFromApiWithFetch } from '../promise';

describe('Probar Async/Await', () => {
test('Realizar una peticion a la API', async () => {
    const API = 'https://rickandmortyapi.com/api/character/';
    const getRick = 'https://rickandmortyapi.com/api/character/1';

    await getDataFromApi(API)
      .then((data) => {
        expect(data.results.length).toBeGreaterThan(0);
      });

    await getDataFromApi(getRick)
      .then((data) => {
        expect(data.name).toEqual('Rick Sanchez');
      });
  });

test('Realizando una peticion a una API con error', async () => {
    const API_ERROR = 'http://httpstat.us/500';
    const request =  await getDataFromApiWithFetch(API_ERROR);
    
    expect(request.status).toEqual(500);
  });

test('Resuelve un Hola', async() => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola')
    await expect(Promise.reject('Error')).rejects.toBe('Error')
  });
});