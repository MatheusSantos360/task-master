import { describe, expect, test, vi } from 'vitest';
import App from '../src/app';

describe('# App core', () => {
  const serverMock = {
    start: vi.fn((): void => {
      console.log('[Mock]: Server started.');
    }),
    stop: vi.fn((): void => {
      console.log('[Mock]: Server stopped.');
    })
  };

  const databaseMock = {
    connect: vi.fn(async (): Promise<void> => {
      console.log('[Mock]: Database connected.');
    }),
    disconnect: vi.fn(async (): Promise<void> => {
      console.log('[Mock]: Database disconnected.');
    })
  };

  test('Should have the property "start" and "stop"', () => {
    const app = App({ database: databaseMock, server: serverMock });
    expect(app).toHaveProperty('start');
    expect(app).toHaveProperty('stop');
  });

  test('Should start the application', async () => {
    const app = App({ database: databaseMock, server: serverMock });
    await app.start();
    expect(serverMock.start).toBeCalledTimes(1);
    expect(databaseMock.connect).toBeCalledTimes(1);
  });

  test('Should stop the application', async () => {
    const app = App({ database: databaseMock, server: serverMock });
    await app.start();
    await app.stop();
    expect(serverMock.stop).toBeCalledTimes(1);
    expect(databaseMock.disconnect).toBeCalledTimes(1);
  });
});
