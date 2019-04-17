const initialState = '';
export default function plasesList(state = initialState, action) {
    if(action.type === 'ON_SORT'){
        return action.sort;
    }
    return state;
}