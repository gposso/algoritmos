function addOneDayToDate(day: number, month: number, year: number): string {
    const daysOfMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((year < 0 || year > 9999) || (month < 1 || month > 12) || (day < 1 || day > daysOfMonth[month - 1])) {
        throw new Error('The date is not correct');
    }

    const dayPlusOne: string = (day + 1).toString().padStart(2, '0');
    const monthPlusOne: string = (month + 1).toString().padStart(2, '0');
    const yearPlusOne: string = (year + 1).toString().padStart(4, '0');

    const d: string = day.toString().padStart(2, '0');
    const m: string = month.toString().padStart(2, '0');
    const y: string = year.toString().padStart(4, '0');

    let date: string = '';

    if (month === 12 && day === daysOfMonth[month - 1]) {
        date = `${yearPlusOne}-01-01`;
    } else if (month !== 12 && day === daysOfMonth[month - 1]) {
        date = `${y}-${monthPlusOne}-01`;
    } else {
        date = `${y}-${m}-${dayPlusOne}`;
    }

    return date;
}

export = addOneDayToDate;
