import constants from '../../constants/constants'
import {ParsedMap, RawMap} from './types'

//default map
let defaultMap =
[
    [3,3,3,3,3,3,3,3,3,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,1,2,2,2,2,2,1,3],
    [3,1,1,2,2,2,2,2,1,3],
    [3,1,1,2,2,2,2,2,1,3],
    [3,1,1,2,2,2,2,2,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,1,1,1,1,1,1,1,1,3],
    [3,3,3,3,3,3,3,3,3,3],
];

export function LoadMap(map:ParsedMap) {
    return {
        type: constants.LOAD_MAP,
        payload: map
    }
}

export function ParseMap(map:RawMap) {
    return {
        type: constants.PARSE_MAP,
        payload: map
    }
}