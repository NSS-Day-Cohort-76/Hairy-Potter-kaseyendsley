let sellableWares = []

export const toSellOrNotToSell = (pottery) => {
    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40
        } else {
            pottery.price = 20
        }
        sellableWares.push(pottery)
    }
    return pottery
}

export const usePottery = () => {
    return sellableWares.map(pottery => deepCopy(pottery))
}

const deepCopy = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item))
    }
    const copy = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key])
        }
    }
    return copy
}
