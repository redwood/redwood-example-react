
export function strToColor(str) {
    return colors[getHashCode(str) % colors.length]
}

export function uniqueKey(obj, i) {
    return getHashCode(JSON.stringify([obj, i]))
}

function getHashCode(str) {
    var hash = 0
    if (str.length === 0) { return hash }
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
        hash = hash & hash // Convert to 32bit integer
    }
    if (hash < 0) {
        hash *= -1
    }
    return hash
}

var colors = [
    '#FF8A80',
    '#FF4081',
    '#E040FB',
    '#B388FF',
    '#7C4DFF',
    '#651FFF',
    '#6200EA',
    '#8C9EFF',
    '#536DFE',
    '#3D5AFE',
    '#304FFE',
    '#82B1FF',
    '#448AFF',
    '#2979FF',
    '#2962FF',
    '#80D8FF',
    '#40C4FF',
    '#00B0FF',
    '#0091EA',
    '#26C6DA',
    '#00BCD4',
    '#00ACC1',
    '#0097A7',
    '#00838F',
    '#006064',
    '#4DB6AC',
    '#26A69A',
    '#009688',
    '#00897B',
    '#00796B',
    '#00695C',
    '#004D40',
    '#66BB6A',
    '#4CAF50',
    '#43A047',
    '#388E3C',
    '#2E7D32',
    '#1B5E20',
    '#FDD835',
    '#FBC02D',
    '#F9A825',
    '#F57F17',
    '#FB8C00',
    '#F57C00',
    '#EF6C00',
    '#E65100',
    '#E64A19',
    '#D84315',
    '#BF360C',
    '#607D8B',
    '#546E7A',
    '#455A64',
]
