import { describe, expect, test } from "vitest";
import { response, status } from "../../src/functions/response";

describe("Status function", () => {
  test('Should return the properties "status", "body" and "internalServerError"', () => {
    const result = status(response.OK);

    expect(typeof result).toBe("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("body");
    expect(result).toHaveProperty("internalServerError")
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
    const result = status(response.OK).body({ property: "..." });

    expect(typeof result).toBe("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("body");

    
    expect(result.status).toBe(response.OK);
    expect(result.body.status).toBe(response.OK);
    expect(result.body.body).toEqual({ property: "..." });

    const result2 = status(response.OK).body([1, 2, 3]);

    expect(typeof result2).toBe("object");
    expect(result2).toHaveProperty("status");
    expect(result2).toHaveProperty("body");

    expect(result2.status).toBe(response.OK);
    expect(result2.body.body).toStrictEqual([1, 2, 3])
  });
});
