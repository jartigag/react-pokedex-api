export const cacheService = {
    set: (item) => {
        localStorage.setItem(item.key, JSON.stringify(item.value))
    },

    get: (key) => {
        return JSON.parse(localStorage.getItem(key))
    }
}
