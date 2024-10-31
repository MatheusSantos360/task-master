export default interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}
