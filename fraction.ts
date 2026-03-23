import { roundTo } from "./utils.ts";
import { gcdEuclid } from "./gcd.ts";

export class Fraction {
  constructor(
      public numerator: number,
      public denominator: number,
  ) {
    if (this.denominator === 0) {
      throw new Error("denominator must not be 0");
    }

    this.cancel();
  }

  public add(other: Fraction) {
    // act
    const newNumerator =
        this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;

    this.numerator = newNumerator;
    this.denominator = newDenominator;

    this.cancel();
  }

  public subtract(other: Fraction) {
    // act
    const newNumerator =
        this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;

    this.numerator = newNumerator;
    this.denominator = newDenominator;

    this.cancel();
  }

  public multiply(other: Fraction) {
    // act
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;

    this.numerator = newNumerator;
    this.denominator = newDenominator;

    this.cancel();
  }

  public divide(other: Fraction) {
    // act
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;

    if (newDenominator === 0) {
      throw new Error("division by zero");
    }

    this.numerator = newNumerator;
    this.denominator = newDenominator;

    this.cancel();
  }

  public cancel() {
    // act
    const divisor = gcdEuclid(this.numerator, this.denominator);

    if (divisor !== 0) {
      this.numerator = this.numerator / divisor;
      this.denominator = this.denominator / divisor;
    }

    if (this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }
  }

  public toFloat(precision: number): number {
    // act
    return roundTo(this.numerator / this.denominator, precision);
  }

  public toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }

  public static parse(expression: string): Fraction {
    // arrange
    const parts = expression.split("/");

    if (parts.length !== 2) {
      throw new Error(`illegal syntax: "[numerator]/[denominator]" required`);
    }

    const numerator = Number.parseInt(parts[0].trim());
    const denominator = Number.parseInt(parts[1].trim());

    if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
      throw new Error(`non-numeric numerator/denominator`);
    }

    // act
    return new Fraction(numerator, denominator);
  }
}