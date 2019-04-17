import React, { Component } from 'react';
import {connect} from 'react-redux';
import fetchData from '../../utils/fetchData';
class ListItem extends Component {

    setFavorite(e){
        e.preventDefault();
        this.props.onSetFavorite({isFavorite:!this.props.isFavorite, id:this.props.id});
    }

    render() {
        return (
            <div className="col-xl-4">
                <a href={this.props.href} className="shop_item">
                    <div className="shop_item__title">
                        <h3>{this.props.title}</h3>
                        <div className="shop_item__title___right">
                            <button className={this.props.isFavorite ? "like like_active" : "like"} onClick={this.setFavorite.bind(this)}>
                                <i className="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div className="shop_item__center">
                        <div className="shop_item__center___avatar">
                            <div className="shop_avatar">
                                <img src={this.props.avatar} alt=""/>
                                <span>this.props.points</span>
                            </div>
                        </div>
                        <div className="shop_item__center___text">
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                    <div className="shop_item__bonus">
                        <h3>{this.props.bonus}
                            <small>%</small>
                        </h3>
                        <span>Бонусов</span>
                    </div>
                </a>
            </div>
        );
    }
}

export default connect(
    state=>({}),
    dispatch=>({
        onSetFavorite:(_favorite)=>{
            dispatch(()=>{
              let options = {
                  method: 'PATCH',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      isFavorite: _favorite.isFavorite
                  })
              }
              return fetchData("list/"+_favorite.id, options)
                  .then((response) => {
                      dispatch({type:"ON_SET_FAVORITE",favorite:_favorite});
                  })
          })
        }
    })
)(ListItem);