import React, { Component ,lazy , Suspense } from 'react'
import { Route , Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../Components/Spinner/Spinner';

import { fetchCollectionsStartAsync } from '../../Redux/shop/shop.action';

const CollectionOutline = lazy(() => import('../../Components/collection-outline/CollectionOutline'))
const CollectionPage= lazy(() => import('../collection/Collection'))

class Shoppage extends Component {

    state = {
        loading : true
    }

    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;        
        fetchCollectionsStartAsync();
        this.setState({loading:false})
    }
    
    
    render() {
        const {match} =this.props
        return (
            <div className="shop-page">
                <Suspense fallback={<Spinner />}>
                    <Switch>
                    <Route exact path={`${match.path}`} component={CollectionOutline} />
                    <Route path={`${match.path}/:CollectionId`}  component={CollectionPage} />
                    </Switch>
                </Suspense>
           </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())    
});

export default connect(null,mapDispatchToProps)(Shoppage);