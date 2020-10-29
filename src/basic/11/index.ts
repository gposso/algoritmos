function lengthNumber(num: number): number {
    if (num > 9999 || num < 0) {
        throw new Error('The number must be between 0 and 9999');
    }

    return num.toString().length;
}

export = lengthNumber;
