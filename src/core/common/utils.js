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

export function deepAssign(target = {}, source = {}) {
    const keys = Object.keys(target)
    return Object.keys(source).reduce((result, property) => ({
        ...result,
        ...{
            [property]: (
                isObject(source[property]) &&
                keys.includes(property) &&
                isObject(target[property])
            )
                ? deepAssign(target[property], source[property])
                : source[property]
        }
    }), target)
}

function isObject(obj) {
    return obj === Object(obj)
}
