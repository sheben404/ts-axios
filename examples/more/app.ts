import qs from 'qs'
import axios, { AxiosError } from '../../src/index'

// /**
//  * withCredential
//  */
// document.cookie = 'a=b'

// axios.get('/more/get').then(res => {
//   console.log('sameSource', res)
// })

// axios.post('http://127.0.0.1:8088/more/server2', {}, {
//   withCredentials: true
// }).then(res => {
//   console.log('withCredentials=true', res)
// })


// axios.post('http://127.0.0.1:8088/more/server2', {},).then(res => {
//   console.log('withCredentials=false', res)
// })

// /**
//  * XSRF防御
//  */
// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN',
//   xsrfHeaderName: 'X-XSRF-TOKEN'
// });

// instance.get('/more/get').then(res => {
//   console.log('xsrf', res);
// });

/**
 * 自定义合法状态码
 */
// axios.get('/more/304').then(res => {
//   console.log(res)
// }).catch((e: AxiosError) => {
//   console.log(e.message)
// })

// axios.get('/more/304', {
//   validateStatus(status) {
//     return status >= 200 && status < 400
//   }
// }).then(res => {
//   console.log(res)
// }).catch((e: AxiosError) => {
//   console.log(e.message)
// })

// /**
//  * 自定义参数序列化
//  */
//  axios.get('/more/get', {
//   params: new URLSearchParams('a=b&c=d')
// }).then(res => {
//   console.log(res)
// })

// axios.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['a', 'b', 'c']
//   }
// }).then(res => {
//   console.log(res)
// })

// const instance = axios.create({
//   paramsSerializer(params) {
//     return qs.stringify(params, { arrayFormat: 'brackets' })
//   }
// })

// instance.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['a', 'b', 'c']
//   }
// }).then(res => {
//   console.log(res)
// })

/**
 * baseURL
 */
const instance = axios.create({
  baseURL: 'https://img0.baidu.com/'
})

instance.get('it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500')

instance.get('https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500')
