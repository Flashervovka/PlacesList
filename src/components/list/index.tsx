import React from 'react';
import {IPlace} from "../../store/types";
import ListItem from "./ListItem";

const List = (props:any)=>{
    return (
        <div className="shop">
            <div className="container_fluid">
                <div className="row">
                    {props.listData.map(
                        (data:IPlace, index:number) => <ListItem key={index} {...data}/>
                    )}
                </div>
            </div>
        </div>
    );
}
export default List;
