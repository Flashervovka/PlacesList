import {Dispatch} from "redux";
import {ILoadPlacesAction, ISetFavoriteAction, LOAD_PLACES_LIST, SET_FAVORITE} from "../store/actions";
import {IFavorite, IPlace} from "../store/types";

const basePath = 'http://localhost:3004/';

export const getPlacesList = async (dispatch:Dispatch<ILoadPlacesAction>)=>{
    dispatch(await fetch(basePath+"list")
        .then((result)=>{return result.json();})
        .then((data:IPlace[])=>{
            let pl: ILoadPlacesAction = {
                placesList:data,
                type:LOAD_PLACES_LIST
            };
            return pl;
        })
    );
}

export const setFavorite = async(dispatch:Dispatch<ISetFavoriteAction>,_favorite:IFavorite)=>{
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isFavorite: _favorite.isFavorite
        })
    }
    dispatch(await fetch(basePath+"list/"+_favorite.id, options)
        .then((result)=>{return result.json();})
        .then((data:IPlace)=>{
            let pl: ISetFavoriteAction = {
                favorite:_favorite,
                type:SET_FAVORITE
            };
            return pl;
        })
    )


}

