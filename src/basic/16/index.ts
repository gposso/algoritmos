function isDate(day: number, month: number, year: number ): boolean {
    const daysOfMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year < 0 || year > 9999) return false;
    if (month < 1 || month > 12 ) return false;
    if (day < 1 || day > daysOfMonth[month - 1] ) return false;

    return true;
}

export = isDate;
