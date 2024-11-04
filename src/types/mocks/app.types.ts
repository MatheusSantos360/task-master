// src/types/app.types.ts
export interface DatabaseMock {
  connect: (uri: string) => Promise<void>;
  disconnect: () => Promise<void>;
}

export interface ServerMock {
  start: () => void;
  stop: () => void;
}

export interface Config {
  database?: DatabaseMock;
  server?: ServerMock;
}
