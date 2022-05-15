export interface HttpResponse {
  status: number;
  data: unknown;
}

export const Success = (data: unknown): HttpResponse => ({
  status: 200,
  data,
});

export const Error = (statusCode: number, data: string): HttpResponse => ({
  status: statusCode,
  data,
});
