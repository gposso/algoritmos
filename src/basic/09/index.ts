function orderTwoNumbers(a: number, b: number): number[] {
    const result: number[] = [];
    if (a > b) {
        result.push(a,b);
    } else {
        result.push(b,a);
    }
    return result;
}

export = orderTwoNumbers;
