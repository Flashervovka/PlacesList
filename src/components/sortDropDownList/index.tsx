import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {ISortAction, ON_SORT} from "../../store/actions";


const mapStateToProps = () => {return {};}
const mapDispatcherToProps = (dispatch: Dispatch<ISortAction>) => {
    return {
        onSort:(_sortBy:string)=>{
            dispatch({type:ON_SORT,sort:_sortBy})
        }
    }
}

type ReduxType = ReturnType<typeof mapDispatcherToProps>;



class SortDropDown extends Component<ReduxType> {

    public onSelectSortType(event:any){
        this.props.onSort(event.target.value);
    }

    render() {
        return (
            <div className="content_bar__sorting">
                Сортировка:
                <select onChange={this.onSelectSortType.bind(this)}>
                    <option value="new">Новое</option>
                    <option value="favorite">Избранное</option>
                </select>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(SortDropDown);
/*export default connect(
    state=>({}),
    dispatch=>({
        onSort:(_sortBy)=>{
            dispatch({type:"ON_SORT",sort:_sortBy})
        }
    })
)(SortDropDown);*/
