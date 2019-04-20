import React, { Component } from 'react';
import { IRootState } from './store/index';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import {ILoadPlacesAction} from "./store/actions";
import * as actions from './utils/fetchData';
import List from "./components/list";
import SortDropDown from './components/sortDropDownList';

const mapDispatcherToProps = (dispatch: Dispatch<ILoadPlacesAction>) => {
    return {
        loadList:()=>{
            actions.getPlacesList(dispatch);
        }
    }
}

const mapStateToProps = ({ placesListData }: IRootState) => {
    const { placesList } = placesListData;
    return { placesList};
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class App extends Component<ReduxType> {
    public componentDidMount(){
        this.props.loadList();
    }

    public render() {
        const { placesList } = this.props;
        return (
            <div className="App">
                <div className="bunner">
                    <a href="/"><img src="img/bunner.png" alt=""/></a>
                </div>
                <div className="content_bar">
                    <div className="content_bar__title">
                        <h2>Заведения</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                    </div>
                    <SortDropDown/>
                </div>
                <List listData={this.props.placesList}/>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatcherToProps)(App);