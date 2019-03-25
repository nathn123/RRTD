import { combineReducers, Dispatch, Reducer, Action, AnyAction} from 'redux';
import { mapReducer } from './map/reducer';

export interface ApplicationState {

};

export interface IAction<T, P> extends AnyAction {
    type: T;
    payload: P;
}

export const rootReducer = combineReducers<ApplicationState>({
    map: mapReducer
});