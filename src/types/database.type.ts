export default interface IDatabase {
  connect: (uri: string) => Promise<void>;
  disconnect: () => Promise<void>;
}