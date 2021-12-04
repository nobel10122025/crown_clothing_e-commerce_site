import React, { Component } from 'react'
import CollectionPreview from '../../Components/collection-preview/CollectionPreview'
import SHOP_DATA from './Shop.data';

export default class Shoppage extends Component {
    constructor(props){
        super(props);
        this.state={
            collections : SHOP_DATA
        }
    }
    render() {
        const collections = this.state.collections
        return (
            <div className="shop-page">
                {
                    collections.map(({id,...otherprops}) => (
                         <CollectionPreview key={id} {...otherprops}/>
                    )
                )}
            </div>
        )
    }
}
