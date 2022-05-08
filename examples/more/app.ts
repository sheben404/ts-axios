import axios from '../../src/index'

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

/**
 * XSRF防御
 */
const instance = axios.create({
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN'
});

instance.get('/more/get').then(res => {
  console.log('xsrf', res);
});
