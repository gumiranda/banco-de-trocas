export type HttpResponse<T = any> = { data: T; error: T };
export type HttpRequest<T = any> = {
  body?: T;
  query?: T;
  params?: T;
  userLogged?: T;
};
export const ok = <T = any>({ data, error }: any): HttpResponse<T> => ({
  error,
  data,
});
