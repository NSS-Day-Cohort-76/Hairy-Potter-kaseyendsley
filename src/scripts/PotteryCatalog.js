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

// If the weight of the piece of pottery is greater than, or equal to, 6 
// then the function must add a price property with a value of 40.

// If the weight of the piece of pottery is less than 6 then the function 
// must add a price property with a value of 20.

// If the piece of pottery is cracked, do not add a price property to it.

// If the pottery is not cracked, add the object to the module-level 
// array of items to be sold. Return the augmented object.

// Define and export a function named usePottery returns a copy of the 
// array of items to be sold. Recall which global javascript function 
// creates a deep copy of values.
