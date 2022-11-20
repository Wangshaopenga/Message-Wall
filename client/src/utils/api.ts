import request from './request'

export function getMessage<T>() {
  return request<T>({
    url: '/msg',
  })
}
