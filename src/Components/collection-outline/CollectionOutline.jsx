import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/CollectionPreview';
import './CollectionOutline.scss'

function CollectionOutline({collections}) {
    return (
        <div className='collection-overview'>
        {   collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        </div>
    )
}
const MapStatetoProps = createStructuredSelector ({
    collections : selectCollectionsForPreview
})

export default connect(MapStatetoProps)(CollectionOutline)
