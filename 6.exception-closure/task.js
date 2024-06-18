"use strict";
//Задание 1.
function parseCount(value) {
    const parsedValue = Number.parseFloat(value);

    if (isNaN(parsedValue)) {
        throw new Error('Невалидное значение');
    }

    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

//Задание 2.
class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const semiPerimeter = this.perimeter / 2;
        const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
        return area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}