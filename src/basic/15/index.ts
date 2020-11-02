function isDate(day: number, month: number, year: number ): boolean {
    if (year < 0 || year > 9999) return false;
    if (month < 1 || month > 12 ) return false;
    if (day < 1 || day > 30 ) return false;
    return true;
}

export = isDate;
