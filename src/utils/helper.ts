export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key] // Inferred type is T[K]
}
export function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value
}
export function throttle(callback: Function, limit: number) {
  var waiting = false // Initially, we're not waiting
  return function () {
    // We return a throttled function
    if (!waiting) {
      // If we're not waiting
      callback.apply(this, arguments) // Execute users function
      waiting = true // Prevent future invocations
      setTimeout(function () {
        // After a period of time
        waiting = false // And allow future invocations
      }, limit)
    }
  }
}

export function debounce(func: Function, wait: number, immediate = false) {
  let timeout: any

  return function () {
    const context = this,
      args = arguments
    var callNow = immediate && !timeout
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      timeout = null

      if (!immediate) {
        func.apply(context, args)
      }
    }, wait)

    if (callNow) func.apply(context, args)
  }
}
