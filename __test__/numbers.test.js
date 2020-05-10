import { numbers } from '../numbers';


describe('Comparacion de numeros', () => {
	test('Mayor que', () => {
		expect(numbers(6,7)).toBeGreaterThan(9); //toBeGreaterThan es mayor que el numero que ingreses
	});

	test('Mayor o igual', () => {
		expect(numbers(29,2)).toBeGreaterThanOrEqual(30);
	});

	test('Menor que', () => {
		expect(numbers(2,2)).toBeLessThan(1);
	});

	test('Menor o igual que', () => {
		expect(numbers(1,0)).toBeLessThanOrEqual(1);
	});

	test('Numeros flotantes', () => {
		expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
	});
});
