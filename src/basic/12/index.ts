function reverseNumber(num: number): number {
    if (num > 9999 || num < 0) {
        throw new Error('The number must be between 0 and 9999');
    }

    const tmp: string = num.toString();
    let result: string = '';

    for (let i = tmp.length - 1; i >= 0; i--) {
        result += tmp[i];
    }

    return parseInt(result);
}

export = reverseNumber;
