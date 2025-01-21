import React from 'react'

const ListItem = (props) => {
    console.log(props);
    return <span> { props.title } { props.label } </span>
}

export default ListItem