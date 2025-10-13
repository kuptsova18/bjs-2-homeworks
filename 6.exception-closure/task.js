function parseCount(value) {
    let parseValue = Number.parseFloat(value);
    if (isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    }
    return parseValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter / 2;
        let s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a,b,c);
    }
    catch (error) {
        
    }
}