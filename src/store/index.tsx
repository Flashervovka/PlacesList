import {applyMiddleware, combineReducers, createStore} from 'redux';
import { placesList } from './reducer';
import { IAppState } from './types';
import thunk from "redux-thunk";

export interface IRootState {
    placesListData: IAppState
}
const store = createStore(
    combineReducers({
        placesListData: placesList
    }), undefined,
    applyMiddleware(thunk));


export default store;