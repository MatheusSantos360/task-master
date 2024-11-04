export default interface IApp {
  start: () => void;
  stop: () => void;
}

export interface Config {
  database?: DatabaseMock;
  server?: ServerMock;
}

export interface DatabaseMock {
  connect: (uri: string) => Promise<void>;
  disconnect: () => Promise<void>;
}

export interface ServerMock {
  start: () => void;
  stop: () => void;
}
