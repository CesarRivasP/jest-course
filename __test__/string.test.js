describe('Comprobar cadenas de texto', () => {
	const text = 'A pretty text';

	test('Debe contener el siguiente texto', () => {
			expect(text).toMatch(/pretty/);
		});

	test('No contiene el siguiente texto', () => {
			expect(text).not.toMatch(/un/);
		});

	test('Comprobar el tamaño de un texto', () => {
			expect(text).toHaveLength(13);
		});
});