import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // arrange
  const fraction = new Fraction(1, 1);

  // act
  const float = fraction.toFloat(0.1);

  // assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // arrange
  const fraction = new Fraction(2, 3);

  // act
  const float = fraction.toFloat(0.01);

  // assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // act
  left.add(right);

  // assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("1/2 - 1/2 = 0", () => {
  // arrange
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 2);

  // act
  left.subtract(right);

  // assert
  assertEquals(left.toFloat(0.01), 0);
});

Deno.test("1/2 * 1/2 = 0.25", () => {
  // arrange
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 2);

  // act
  left.multiply(right);

  // assert
  assertEquals(left.toFloat(0.01), 0.25);
});

Deno.test("1/2 : 1/2 = 1.0", () => {
  // arrange
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 2);

  // act
  left.divide(right);

  // assert
  assertEquals(left.toFloat(0.01), 1.0);
});

Deno.test("Fraction.cancel kürzt 2/4 zu 1/2", () => {
  // arrange
  const fraction = new Fraction(2, 4);

  // act
  fraction.cancel();

  // assert
  assertEquals(fraction.numerator, 1);
  assertEquals(fraction.denominator, 2);
});

Deno.test("Fraction.cancel kürzt 6/9 zu 2/3", () => {
  // arrange
  const fraction = new Fraction(6, 9);

  // act
  fraction.cancel();

  // assert
  assertEquals(fraction.numerator, 2);
  assertEquals(fraction.denominator, 3);
});