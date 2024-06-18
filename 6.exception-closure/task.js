﻿//Задание 1.
function parseCount(namber) {
    if (Number.isNaN(Number.parseFloat(namber))) {
        throw new Error("Невалидное значение");
    }
    return parseFloat(namber);
}

function validateCount(namber) {
    try {
        return parseCount(namber);
    } catch (error) {
        return error; 
    }
}

//Задание 2.
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

        return +s.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует"
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}