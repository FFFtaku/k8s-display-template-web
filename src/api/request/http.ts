import request from "./axios";
import { RequestMethodEnum } from '@constant/httpConstant'
import type { AxiosRequestConfig } from 'axios'

const http = {
  get<T = any>(url: string, params?: object) {
    return request<T>(url, RequestMethodEnum.GET, { params })
  },

  post<T = any>(url: string, data?: object) {
    return request<T>(url, RequestMethodEnum.POST, { data })
  },

  put<T = any>(url: string, data?: object) {
    return request<T>(url, RequestMethodEnum.PUT, { data })
  },

  delete<T = any>(url: string, data?: object) {
    return request<T>(url, RequestMethodEnum.DELETE, { data })
  },

  request<T = any>(url: string, config?: AxiosRequestConfig) {
    return request<T>(url, RequestMethodEnum.DELETE, config)
  },
}

export default http