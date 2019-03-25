import constants from '../../constants/constants'
import { IAction } from '../store';
export type Terrain  = {
    type: string
    src: string
}

export type ParsedMap  = Array<Array<Terrain>>;
export type RawMap  = Array<Array<number>>;


export type LoadMapActionType = IAction<typeof constants.LOAD_MAP, unknown>
type LoadMapActionCreator = (parsedMap: ParsedMap) => LoadMapActionType;
export const LoadMapAction: LoadMapActionCreator = (parsedMap) => ({
    type: constants.LOAD_MAP,
    payload: parsedMap
});

export type ParseMapActionType = IAction<typeof constants.PARSE_MAP,unknown>
type ParseMapActionCreator = (rawMap: RawMap) => ParseMapActionType;
export const ParseMapAction: LoadMapActionCreator = (rawMap) => ({
    type: constants.PARSE_MAP,
    payload: rawMap
});

export type MapActionsTypes = LoadMapActionType

export interface MapTileProps {
    src: string
}
export interface MapContainerProps {
    src: string
}

// map redux store state
export interface MapState {
    loaded: boolean,
    map: null | ParsedMap,
    error: string | null
}