import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface DWJRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (response: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface DWJRequestConfig extends AxiosRequestConfig {
  interceptors?: DWJRequestInterceptors
  showLoading?: boolean
}
