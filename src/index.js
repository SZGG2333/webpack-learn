const debounce = (fn, duration) => {
    let timer = null
    return (...args) => {
        clearTimeout(timer)
        setTimeout(() => {
            fn(...args)
        }, duration)
    }
}
