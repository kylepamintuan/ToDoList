import React, { Component } from 'react';
import dummyListData from '../dummy_data/list_data';

class List extends Component {
    state = {
        list: []
    }

    componentDidMount(){
        this.getListData();
    }

    getListData(){
        this.setState({
            list: dummyListData
        })
    }

    render(){
        console.log('State:', this.state);
        const listELements = this.state.list.map((item, index) => {
           return(
               <li className="collection-item" key={item._id}>{item.title}</li>
           ) 
        })
        return(
            <ul className="collection with-header">
                <li className="collection-header"><h1>To-Do List</h1></li>
                {listELements}
            </ul>
        )
    }
}

export default List;