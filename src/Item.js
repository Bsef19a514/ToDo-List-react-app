import React from "react"
import CloseIcon from '@mui/icons-material/Close';

const Item=(props)=>{
    return (
        <li>
            <CloseIcon className="cancelIcon" id={props.id} onClick={()=>{props.onSelect(props.id)}}/>
            <span className="item">{props.text}</span>
        </li>
    )
}

export default Item