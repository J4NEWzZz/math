import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // arrange
  const circle = new Circle(new Point2D(3, 4), 5);

  // act
  const actual = circle.circumference();

  // assert
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("distanceTo x = 5 and y = 7", () => {
  // arrange
  const point1 = new Point2D(0, 0);
  const point2 = new Point2D(5, 7);

  // act
  const actual = point1.distanceTo(point2);

  // assert
  assertAlmostEquals(actual, 8.6023, 0.0001)
})
Deno.test("distanceTo x = 8 and y = 10", () => {
  // arrange
  const point1 = new Point2D(0, 0);
  const point2 = new Point2D(8, 10);

  // act
  const actual = point1.distanceTo(point2);
  
  // assert
  assertAlmostEquals(actual, 12.8062, 0.0001)
})

Deno.test("area of a circle with radius 5", () => {
  // arrange
  const circle = new Circle(new Point2D(0, 0), 5);

  // act
  const actual = circle.area();

  // assert
  assertAlmostEquals(actual, 78.5398, 0.0001);
});

Deno.test("diameter of a circle with radius 5", () => {
  // arrange
  const circle = new Circle(new Point2D(0, 0), 5);

  // act
  const actual = circle.diameter();

  // assert
  assertEquals(actual, 10);
});

Deno.test("circumference of rectangle", () => {
  // arrange
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  // act
  const actual = rect.circumference();

  // assert
  assertEquals(actual, 20);
});

Deno.test("area of rectangle", () => {
  // arrange
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  // act
  const actual = rect.area();

  // assert
  assertEquals(actual, 12);
});

Deno.test("diagonal of rectangle", () => {
  // arrange
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  // act
  const actual = rect.diagonal();

  // assert
  assertEquals(actual, 5);
});
