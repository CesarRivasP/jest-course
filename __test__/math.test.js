 
import { suma, resta, multiplicacion, division } from '../math.js';

describe('Calculos matematicos', () =>{
	test('Test sumas', () => {
		expect(suma(1, 2)).toBe(3);
	});

	test('Test Resta', () => {
		expect(resta(5, 2)).toBe(3);
	});

	test('Test multiplicacion', () => {
		expect(multiplicacion(2, 4)).toBe(8);
	});

	test('Test Division', () => {
		expect(division(10, 2)).toBe(5);
	});
});