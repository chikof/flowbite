export const getPrefixedAttribute = (value: string, prefix?: string) => {
    if (prefix === null || prefix === '') {
        return `data-${value}`
    }

    return `data-${prefix}${value}`
}

interface prefixedValues {
    [key: string]: any
}

export const getPrefixedDataAttributes = (values: Array<string>, prefix?: string) => {
    const prefixedObjects: prefixedValues = {}
    for (const key in values) {
        prefixedObjects[key] = getPrefixedAttribute(values[key], prefix)
    }
    return prefixedObjects
}