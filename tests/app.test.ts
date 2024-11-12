import { describe, expect, test, vi } from "vitest";
import App from "../src/app";

describe("App core", () => {
  const createServerMock = () => ({
    start: vi.fn(),
    stop: vi.fn(),
  });

  const createDatabaseMock = () => ({
    connect: vi.fn(),
    disconnect: vi.fn(),
  });

  test('Should have the property "start" and "stop"', () => {
    const serverMock = createServerMock();
    const databaseMock = createDatabaseMock();
    const app = App({ database: databaseMock, server: serverMock });

    expect(app).toHaveProperty("start");
    expect(app).toHaveProperty("stop");
  });

  test("Should start the application", async () => {
    const serverMock = createServerMock();
    const databaseMock = createDatabaseMock();
    const app = App({ database: databaseMock, server: serverMock });

    await app.start();

    expect(serverMock.start).toBeCalledTimes(1);
    expect(databaseMock.connect).toBeCalledTimes(1);
  });

  test("Should stop the application", async () => {
    const serverMock = createServerMock();
    const databaseMock = createDatabaseMock();
    const app = App({ database: databaseMock, server: serverMock });

    await app.start();
    await app.stop();

    expect(serverMock.stop).toBeCalledTimes(1);
    expect(databaseMock.disconnect).toBeCalledTimes(1);
  });
});
