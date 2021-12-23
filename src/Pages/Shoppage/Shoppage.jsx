import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOutline from '../../Components/collection-outline/CollectionOutline'
import CollectionPage from '../collection/Collection';
export const Shoppage = ({match}) => {
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component ={CollectionOutline} />
                <Route path={`${match.path}/:collectionId`} component= {CollectionPage}/>
            </div>
        )
}
export default Shoppage
