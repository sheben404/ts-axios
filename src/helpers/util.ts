const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// 对于 FormData、ArrayBuffer 这些类型，
// isObject 判断也为 true
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// 而 isPlainObject 的判断方式，
// 只有我们定义的普通 JSON 对象才能满足。
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for(const key in from) {
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
