import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { MyResponseType } from '@/types'

const request = async <T = any>(config: AxiosRequestConfig): Promise<MyResponseType<T>> => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
  })
  // 请求拦截
  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    // 如果有接口需要认证才可以访问,在这里统一设置
    const token = window.localStorage.getItem('token')
    if (token)
      (config.headers as any).Authorization = `Bearer ${token}`
    // 直接放行
    return config
  }, (err) => {
    console.error(err)
  })
  // 响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data ? res.data : res
    },
    (err) => {
    // 如果需要授权才可以访问接口,统一去login授权
      if (err.response.status === 401)
        console.log(err)
      console.error(err)
    // 如果有错误,这里处理错误,显示错误信息
    })
  return instance(config)
}

export default request
