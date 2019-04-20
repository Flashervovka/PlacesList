import {IAppState, IPlace} from './types';
import {PlacesActions, LOAD_PLACES_LIST, SET_FAVORITE, ON_SORT} from "./actions";

const init: IAppState = {
    placesList: []
};

const sortByFavorite = (a:IPlace,b:IPlace,byFavorite:number)=>{
    if(a.isFavorite>b.isFavorite)return -1*byFavorite;
    else if(a.isFavorite<b.isFavorite)return 1*byFavorite;
    else return 0;
}

export function placesList(state: IAppState = init, action: PlacesActions): IAppState {

    switch (action.type) {
        case LOAD_PLACES_LIST:
            return {
                placesList:[...state.placesList, ...action.placesList],
            };
        case SET_FAVORITE:
            return{
                placesList:state.placesList.map((element,index)=>{
                    let copy:IPlace = Object.assign(element,{});
                    if(copy.id === action.favorite.id){
                        copy.isFavorite = action.favorite.isFavorite;
                    }
                    return copy;
                })
            }
        case ON_SORT:
            let placesListNew:IPlace[] = state.placesList.map((element)=>{
                let copy:IPlace = Object.assign(element,{});
                return copy;
            });

            if(action.sort === "favorite")placesListNew.sort((a,b)=>{return sortByFavorite(a,b,1)});
            else placesListNew.sort((a,b)=>{return sortByFavorite(a,b,-1)});
            return {
                placesList:placesListNew
            };
        default:
            return state;
    }

}