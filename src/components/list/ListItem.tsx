import React, { Component } from 'react';
import {connect} from 'react-redux';
import {IFavorite, IPlace} from "../../store/types";
import {Dispatch} from "redux";
import {ISetFavoriteAction} from "../../store/actions";
import * as actions from '../../utils/fetchData';
const mapStateToProps = (props:IPlace) => {
    return props;
}
const mapDispatcherToProps = (dispatch: Dispatch<ISetFavoriteAction>) => {
    return {
        setFavorite:(_favorite:IFavorite)=>{
            actions.setFavorite(dispatch,_favorite);
        }
    }
}

type ReduxType = ReturnType<typeof mapDispatcherToProps>&ReturnType<typeof mapStateToProps>;



class ListItem extends Component<ReduxType> {

    public setFavorite(e:any){
        e.preventDefault();
        let favorite:IFavorite = {
            id:this.props.id,
            isFavorite:!this.props.isFavorite
        };
        this.props.setFavorite(favorite);
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
export default connect(mapStateToProps,mapDispatcherToProps)(ListItem);