function daysOfDifferenceBetweenTwoDates(firstDate: string, secondDate: string): number {
    const start: string[] = firstDate.split('-');
    const end: string[] = secondDate.split('-');

    const yearStart: number = parseInt(start[0]);
    const monthStart: number = parseInt(start[1]);
    const dayStart: number = parseInt(start[2]);

    const yearEnd: number = parseInt(end[0]);
    const monthEnd: number = parseInt(end[1]);
    const dayEnd: number = parseInt(end[2]);

    return Math.abs(yearStart - yearEnd) * 360
        + Math.abs(((monthStart * 30) + dayStart) - ((monthEnd * 30) + dayEnd));
}

export = daysOfDifferenceBetweenTwoDates;
