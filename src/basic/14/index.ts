enum Qualification {
    Insufficient = 'INSUFFICIENT',
    Enough = 'ENOUGH',
    Good = 'GOOD',
    Outstanding = 'OUTSTANDING',
    Excellent = 'EXCELLENT'
}

function getQualification(score: number): Qualification {
    if (score > 10 || score < 0) {
        throw new Error('The score must be between 0 and 10');
    }

    if (score <= 2) {
        return Qualification.Insufficient;
    } else if (score <= 4) {
        return Qualification.Enough;
    } else if (score <= 6) {
        return Qualification.Good;
    } else if (score <= 8) {
        return Qualification.Outstanding;
    } else {
        return Qualification.Excellent;
    }
}

export = getQualification;
