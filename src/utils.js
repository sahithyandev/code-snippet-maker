
/**
 * @param {String} word 
 */
const capitalizeFirstLetter = word => word[0].toUpperCase() + word.slice(1)

/**
 * Convert a "spaced string" to camelCase
 * 
 * @example "SpAcEd string" ==> "spacedString"
 * @param {String} str
 */
export const spacedToCamelCase = str => {
    return str.toLowerCase().split(' ').map((word, i) => {
        return i == 0 ? word : capitalizeFirstLetter(word)
    }).join('')
}


/**
 * Convert a camelCasedString to "Spaced String"
 
 * @example "spacedString" ==> "Spaced String"
 * @param {String} str
 */
export const camelCaseToSpaced = str => {
    return str.replace(/([A-Z])/g, '-$1').split('-').map(capitalizeFirstLetter)
        .join(' ');
}