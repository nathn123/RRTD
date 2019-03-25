import {MapState, MapActionsTypes, RawMap, ParsedMap, Terrain} from './types'
import constants from '../../constants/constants';
import { number } from 'prop-types';

const initialState: MapState = {
    loaded: false,
    map: null,
    error: null
};
function parseMap(rawMap:RawMap) : ParsedMap {
    let parseMap :Array<Array<Terrain>> = new Array<Array<Terrain>>(rawMap.length);
    rawMap.forEach((row: Array<number>, x: number) => {
        parseMap[x].length = row.length;
        row.forEach((tile: number, y: number) => {
            switch (tile) {
                case 1:
                parseMap[x][y] = {type: 'grass', src: './assets/grass_tile_1.png'}
                    break;
                case 1:
                parseMap[x][y] = {type: 'sand', src: './assets/sand_tile.png'}
                    break;
                case 1:
                parseMap[x][y] = {type: 'water', src: './assets/water_tile.png'}
                    break;

                default:
                    break;
            }
        })
    })
    return parseMap;
}
export function mapReducer(
    state = initialState,
    action: MapActionsTypes
): MapState {
    switch (action.type) {
        // case constants.LOAD_MAP:
        // if (checkRawMap(action.payload)) {
        //     try {
        //         parseMap(action.payload)
        //     } catch (error) {
        //         return {loaded: false, map: null, error:`unable to load map due to error: ${error}`};
        //     }
        // }
            // break;
        case constants.PARSE_MAP:
        if (checkRawMap(action.payload)) {
            try {
                parseMap(action.payload)
            } catch (error) {
                return {loaded: false, map: null, error:`unable to parse map due to error: ${error}`};
            }
        }
            break;

        default:
        return {loaded: false, map: null, error:`Default case hit, check action types: ${action}`};
            break;
        }
    return {loaded: false, map: null, error: "Return outside of switch this should be impossible"};
}

function checkRawMap(map:unknown) : map is RawMap {
    return (
        !!map &&
        map instanceof Array &&
        map[0] instanceof Array &&
        map[0][0] instanceof number
        );
}