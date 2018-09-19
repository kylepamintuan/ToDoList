import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleAddItem = (e) => {
        e.preventDefault();
        
        this.props.add(this.state);
    }

    render(){
        const { title, details } = this.state;
        return(
            <form onSubmit={this.handleAddItem}>
                <div className="row">
                <h4 className="col s8 offset-s2">Add Item</h4>
                    <div className="col s8 offset-s2">
                        <label>Title</label>
                        <input name="title" type="text" value={title} onChange={(e) => this.setState({title: e.target.value})}/>
                    </div>
                    <div className="col s8 offset-s2">
                        <label>Details</label>
                        <input name="details" type="text" value={details} onChange={({target}) => this.setState({details: target.value})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s2">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddItem;