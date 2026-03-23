export function gcdBruteForce(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);

    if (a === 0 && b === 0) {
        return 0;
    }

    if (a === 0) {
        return b;
    }

    if (b === 0) {
        return a;
    }

    const limit = Math.min(a, b);

    for (let i = limit; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }

    return 1;
}

export function gcdEuclid(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);

    if (a === 0 && b === 0) {
        return 0;
    }

    if (a === 0) {
        return b;
    }

    if (b === 0) {
        return a;
    }

    if (a === b) {
        return a;
    }

    if (a > b) {
        return gcdEuclid(a - b, b);
    }

    return gcdEuclid(a, b - a);
}