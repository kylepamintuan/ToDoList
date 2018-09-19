import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item'
import dummyListData from '../dummy_data/list_data';
class App extends Component {
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

    addItem = (item) => {
        item._id = new Date().getTime();

        this.setState({
            list: [item, ...this.state.list]
        });
    }

    render(){
        const { list } = this.state;
        return(
            <div className="container">
                <List data={list}/>
                <AddItem add={this.addItem}/>
            </div>
        )
    }
}

export default App;
