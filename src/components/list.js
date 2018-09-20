import React from 'react';
import Item from './item';

const List = (props) => {
    const listELements = props.data.map((item, index) => {
        return <Item key={item._id} item={item} delete={() => props.delete(index)}/>
    });

    return(
        <ul className="collection with-header">
            {listELements}
        </ul>
    )
}

export default List;