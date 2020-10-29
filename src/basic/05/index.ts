enum TypeOfNumber {
    Positive = "POSITIVE",
    Negative = "NEGATIVE",
    Neutral = "NEUTRAL"
}

function typeOfNumber(n: number): TypeOfNumber {
    if (n > 0) {
        return TypeOfNumber.Positive;
    } else if (n < 0) {
        return TypeOfNumber.Negative;
    } else {
        return TypeOfNumber.Neutral;
    }
}

export = typeOfNumber;
