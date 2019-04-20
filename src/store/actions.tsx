import {IFavorite, IPlace} from "./types";

export const LOAD_PLACES_LIST = 'LOAD_PLACES_LIST';
export const SET_FAVORITE = 'SET_FAVORITE';
export const ON_SORT = 'ON_SORT';

export interface ILoadPlacesAction{
    placesList: IPlace[],
    type:typeof LOAD_PLACES_LIST
}

export interface ISetFavoriteAction{
    favorite:IFavorite,
    type:typeof SET_FAVORITE
}

export interface ISortAction{
    sort:string,
    type:typeof ON_SORT
}


export type PlacesActions =
    | ILoadPlacesAction
    | ISetFavoriteAction
    |ISortAction;
