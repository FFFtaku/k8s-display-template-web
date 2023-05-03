const enum ResponseStatusEnum {
  SUCCESS = 200,
  NOT_FOUND = 404,
  OPERATION_FAILURE = 10000,
  IDENTITY_FAILURE = 10001,
  SERVER_ERROR = 20000,
  API_PARAMETER_ERROR = 20001,
}

const enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

/**
 * axios支持的http请求方法
 *  | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
    | 'purge' | 'PURGE'
    | 'link' | 'LINK'
    | 'unlink' | 'UNLINK';
 */
const enum RequestMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export {
  ResponseStatusEnum,
  ContentTypeEnum,
  RequestMethodEnum
}