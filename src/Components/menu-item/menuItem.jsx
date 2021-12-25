import React from 'react'
import './menu-item.scss'
import {withRouter} from 'react-router-dom';

function menuItem({title , imageUrl ,size , linkUrl , history}) {

    return (
        <div className={`${size} menu-item`} onClick={()=>(history.push(linkUrl))}>
            <div className="background-image"
            style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className="content">
                <div className="title">{title.toUpperCase()}</div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(menuItem);
