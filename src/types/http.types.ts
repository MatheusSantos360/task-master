export interface HttpResponse<Body> {
  status: number;
  body: Body | string;
}
