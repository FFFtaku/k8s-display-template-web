interface ResponseResult<T = any> {
  message: string,
  code: number,
  data: T
}

export type {
  ResponseResult
}