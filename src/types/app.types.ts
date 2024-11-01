// src/types/app.types.ts
export interface Mocks {
  database?: {
    connect: (uri: string) => Promise<void>;
    stop: () => Promise<void>;
  };
  server?: {
    start: () => void;
  };
}
