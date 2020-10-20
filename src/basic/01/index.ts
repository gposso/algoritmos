function quadraticEquation(a: number, b: number, c: number): number[] | false {
    if (a === 0) return false;

    const discriminant = (b ** 2) - (4 * a * c);
    let solution: number[] | boolean = [];

    if (discriminant > 0) {
        solution[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
        solution[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
    } else if (discriminant === 0) {
        solution[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    } else {
        solution = false;
    }

    return solution;
}

export = quadraticEquation;
