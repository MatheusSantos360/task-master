import { describe, test, expect, vi } from "vitest";
import Database from "../../src/functions/Database"

describe("Database function", () => {
  test("Should have the properties \"start\" and \"stop\"", () => {
    const database = Database();

    expect(database).toHaveProperty("connect");
    expect(database).toHaveProperty("disconnect");

    expect(typeof database.connect).toBe("function")
    expect(typeof database.disconnect).toBe("function")
  })

  test("\"start\" and \"stop\" should be functions", () => {
    const database = Database();

    expect(typeof database.connect).toBe("function")
    expect(typeof database.disconnect).toBe("function")
  })

  test("Should connect to the database", () => {
    const database = Database();
    const connectSpy = vi.spyOn(database, "connect")

    database.connect("mongodb://localhost:27017/example");
    expect(connectSpy).toBeCalledWith("mongodb://localhost:27017/example");
  })

  test("Should disconnect the database", () => {
    const database = Database();
    const disconnectSpy = vi.spyOn(database, "disconnect");

    database.disconnect();
    expect(disconnectSpy).toBeCalledTimes(1);
  })
})