import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOutline from '../../Components/collection-outline/CollectionOutline'
import { firestore , convertCollectionsSnapshotToMap } from '../../firebase/Firebase';
import CollectionPage from '../collection/Collection';
import {updateCollections} from '../../Redux/shop/shop.action';

class Shoppage extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount(){
    const {updateCollections} = this.props

        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot((snapShot)=>{
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        console.log(collectionsMap)
        updateCollections(collectionsMap);
        })
    }
    
    
    render() {
        const {match} =this.props
        return (
            <div className="shop-page">
                 <Route exact path={`${match.path}`} component ={CollectionOutline} />
                 <Route path={`${match.path}/:collectionId`} component= {CollectionPage}/>
           </div>
        )
    }
}
const mapDispatchToProps= dispatch => ({
    updateCollections : collectionsMap => (dispatch(updateCollections(collectionsMap)))
});
export default connect(null,mapDispatchToProps)(Shoppage);