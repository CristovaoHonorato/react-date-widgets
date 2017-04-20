export function omit(obj, ...keys){

    if(!keys.every(key => typeof key === 'string')){
        throw new Error("Key should be of type string")
    }

    return Object.keys(obj).reduce(
        (result, key) =>  keys.includes(key)
            ? result
            : {...result, [key]: obj[key]},
        {}
    )
}

export function range(length) {
    return Array.from({length: length}, (v,i) => i)
}

export function extendObject(base = {}, extension = {}) {
    const keys = Object.keys(base)
    return Object.keys(extension).reduce((result, property) => ({
        ...result,
        ...{
            [property]: keys.includes(property) && isObject(base[property])
                ? extendObject(base[property], extension[property])
                : extension[property]
        }
    }), base)
}

function isObject(obj) {
    return obj === Object(obj)
}
