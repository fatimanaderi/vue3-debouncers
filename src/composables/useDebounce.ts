const debounce = (fn: Function, delay = 0, immediate = false) => {
  let timeout: any
  return (...args: any) => {
    if (immediate && !timeout) fn(...args)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
export default debounce
