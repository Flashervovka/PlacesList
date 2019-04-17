import React, { Component } from 'react';
import {connect} from 'react-redux';
class SortDropDown extends Component {

    onSelectSortType(event){
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

export default connect(
    state=>({}),
    dispatch=>({
        onSort:(_sortBy)=>{
            dispatch({type:"ON_SORT",sort:_sortBy})
        }
    })
)(SortDropDown);
