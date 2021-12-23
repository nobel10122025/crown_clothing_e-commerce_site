import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDirectoryItems } from '../../Redux/Directory/directory.selector';

import MenuItem from '../menu-item/menuItem'
import './directory.scss'

function directory({sections}) {
    return (
        <div className="directory-menu">
                {
                   sections.map(({title, imageUrl, size ,id , linkUrl})=>{
                        return(
                            <MenuItem 
                                key={id}
                                title = {title}
                                imageUrl = {imageUrl}
                                size = {size}
                                linkUrl={linkUrl}
                                />
                        )
                    })
                }
            </div>
    )
}

export const MapStatetoProps = createStructuredSelector({
    sections : selectDirectoryItems
})
export default connect(MapStatetoProps)(directory)
