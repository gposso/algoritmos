function orderThreeNumbers(a: number, b: number, c: number): number[] {
    const result: number[] = Array.from(arguments);
    return result.sort((a, b) => b - a);
}

export = orderThreeNumbers;
