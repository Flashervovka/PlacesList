const initialState = [];
const sortByFavorite = (a,b,byFavorite)=>{
    if(a.isFavorite>b.isFavorite)return -1*byFavorite;
    else if(a.isFavorite<b.isFavorite)return 1*byFavorite;
    else return 0;
}
export default function plasesList(state = initialState, action) {
    if (action.type === 'ADD_NEW_PLACE') {
        return [ ...state, ...action.palcesList];
    }else if(action.type === "ON_SET_FAVORITE"){
        return state.map((element,index)=>{
            let copy = Object.assign(element,{});
            if(index === action.favorite.id-1){
                copy.isFavorite = action.favorite.isFavorite;
            }
            return copy;
        });
    }else if(action.type === "ON_SORT"){
        let newState = state.slice();
        if(action.sort === "favorite")newState.sort((a,b)=>{return sortByFavorite(a,b,1)});
        else newState.sort((a,b)=>{return sortByFavorite(a,b,-1)});
        return newState;
    }
    return state;
}