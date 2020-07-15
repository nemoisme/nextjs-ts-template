import axios, { AxiosProxyConfig, AxiosRequestConfig } from 'axios'
const next = require('next')

const IRequestMethods: string[] = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch', 'unlink']

const instance = axios.create({
  baseURL: '',
  timeout: 1000 * 30,
  headers: {}
})

// next({axios:instance})


instance.interceptors.request.use((config) => {
  try {
    let url: any = config.url
    const [path, query] = url.indexOf('?') > -1 ? url.split('?') : [url, '']
    const timestamp = new Date().getTime()
    const token = 'dasdheyyffc321312asds'
    url = `${path}?_t=${timestamp}&token=${token}` + (query ? `&${query}` : '')
    config.url = url
    return config
  } catch (err) {
    return Promise.reject(err)
  }
}, (err: any) => {
  return Promise.reject(err)
})

// 需要跳转

instance.interceptors.response.use((config) => {
  try {
    let data = config.data&&config.data.data
    config.data=data
    return config
  } catch (err) {
    return Promise.reject(err)
  }
}, (err: any) => {
  return Promise.reject(err)
})


module.exports = IRequestMethods.reduce((cur: any, method:any) => {
  cur[method] = (url: string, params: any) => instance.request({method, url, params })
  return cur
}, {})










