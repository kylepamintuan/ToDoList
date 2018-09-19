import React from 'react';

const List = (props) => {
    const listELements = props.data.map((item, index) => {
        return(
            <li className="collection-item" key={item._id}>{item.title}</li>
        ) 
    });

    return(
        <ul className="collection with-header">
            <li className="collection-header"><h3>To-Do List</h3></li>
            {listELements}
        </ul>
    )
}

export default List;