import { ref, customRef } from 'vue'
import debounce from './useDebounce'

const useDebouncedRef = (initialValue: string, delay: number, immediate: boolean) => {
  const state = ref(initialValue)
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track()
      return state.value
    },
    set: debounce(
      (value: string) => {
        state.value = value
        trigger()
      },
      delay,
      immediate
    )
  }))
  return debouncedRef
}
export default useDebouncedRef
