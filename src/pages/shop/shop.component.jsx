import React, { Component, Children } from 'react'
import SHOP_DATA from '../../data/shop.data'
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component'

export default class ShopPage extends Component {

    state = {
        collections: SHOP_DATA
    }

    render() {

        const { collections } = this.state

        return (
            <div className='shop-page'>
                {
                    Children.toArray(collections.map(({ ...props }) =>
                        <CollectionPreview {...props} />
                    ))
                }
            </div>
        )
    }
}
