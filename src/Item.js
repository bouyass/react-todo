import React from 'react'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash  } from '@fortawesome/free-solid-svg-icons'

function Item(props) {
    return (
        <div className="item"> 
            <p className="text"> {props.text} </p> 
            <div className="icons">
             <FontAwesomeIcon id={props.id} onClick={props.delete} icon={faTrash}/>
            </div>
        </div>
    )
}

export default Item
