import React from 'react';
import ListItem from './ListItem';

const List = (props)=>{
    return (
        <div className="shop">
            <div className="container_fluid">
                <div className="row">
                    {props.listData.map(
                        (data, index) => <ListItem key={index} {...data}/>
                    )}
                </div>
            </div>
        </div>
    );
}
export default List;
