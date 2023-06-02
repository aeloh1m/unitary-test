import { mayorDeEdad } from "./MyComponent";

describe('funciones dentro del componente MyComponent', () => {

    describe('mayorDeEdad', () => {
        test('Si tiene 18 o más debe devolver true', () => {
            const result = mayorDeEdad(18);
            expect(result).toBe(true);
        });

        test('Si tiene menos de 18 debe devolver false', () => {
            const result = mayorDeEdad(17);
            expect(result).toBe(false);
        });

        test('Si la edad ingresada es un valor negativo debe devolver null', () => {
            const result = mayorDeEdad(-17);
            expect(result).toBe(null);
        });



    })
})