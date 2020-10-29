import { resourceLimits } from "worker_threads";

function biggerNumberOrEqual(first: number, second: number): number | string {
    let result: number | string;
    if (first > second) {
        result =  first;
    } else if (second > first) {
        result = second;
    } else {
        result = 'equal';
    }
    return result;
}

export = biggerNumberOrEqual;
