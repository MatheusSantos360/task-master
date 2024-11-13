import { describe, expect, test } from "vitest";
import { response, status } from "../../src/functions/response";

describe("Status function", () => {
  test('Should return the properties "status" and "body"', () => {
    const result = status(response.OK);

    expect(typeof result).toBe("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("body");
  });

  test("The status property should be a number", () => {
    const result = status(response.OK);

    expect(typeof result.status).toBe("number");
  });

  test("The body property should be a function", () => {
    const result = status(response.OK);

    expect(typeof result.body).toBe("function");
  });

  test('The body property/function should return an object with the properties "status" and "body" (body: given value)', () => {
    const result1 = status(response.OK).body("Hello, World!");

    expect(typeof result1).toBe("object");
    expect(result1).toHaveProperty("status");
    expect(result1).toHaveProperty("body");
    expect(result1.status).toBe(response.OK);
    expect(typeof result1.body).toBe("string");
    expect(result1.body).toBe("Hello, World!");

    const result2 = status(response.OK).body({ property: "..." });

    expect(typeof result2).toBe("object");
    expect(result2).toHaveProperty("status");
    expect(result2).toHaveProperty("body");
    expect(result2.status).toBe(response.OK);
    expect(typeof result2.body).toBe("object");
    expect(result2.body).toEqual({ property: "..." });

    const result3 = status(response.OK).body([1, 2, 3]);

    expect(typeof result3).toBe("object");
    expect(result3).toHaveProperty("status");
    expect(result3).toHaveProperty("body");
    expect(result3.status).toBe(response.OK);
    expect(Array.isArray(result3.body)).toBeTruthy();
    expect(result3.body).toEqual([1, 2, 3]);
  });
});
