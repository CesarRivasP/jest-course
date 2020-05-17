/* Despues de cada prueba */
afterEach(() => console.log('Despues de cada prueba'));

afterAll(() => console.log('Despues de todas las pruebas'));

/* Antes de todas las pruebas */
beforeAll(() => console.log('Despues de todas las pruebas'));

beforeEach(() => console.log('Despues de cada prueba'));

describe('Preparar antes de ejecutar', () => {
test('Es verdadero', () => {
		expect(true).toBeTruthy();
	});
});