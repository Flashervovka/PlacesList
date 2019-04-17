import React, { Component } from 'react';
import List from './components/list';
import {connect} from 'react-redux';
import fetchData from './utils/fetchData';
import SortDropDown from './components/sortDropDownList';

class App extends Component {

  componentDidMount(){
     this.props.onAddGetPlacesList();
  }

  render() {
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
          <List listData={this.props.state.plasesList}/>
      </div>
    );
  }
}

export default connect(
    state=>({
        state:state
    }),
    dispatch=>({
        onAddGetPlacesList:()=>{
            dispatch(()=>{
                fetchData("list")
                    .then((result)=>{return result.json();})
                    .then((data)=>{
                        dispatch({type:"ADD_NEW_PLACE",palcesList:data});
                    });

            })
        }
    })
)(App);