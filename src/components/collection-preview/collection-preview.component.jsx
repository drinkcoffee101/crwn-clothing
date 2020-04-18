import React, { Children } from 'react'
import { CollectionItem } from '../collection-item/collection-item.component';
import './collection-preview.styles.scss'

export const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    Children.toArray(items
                        .filter((item, idx) => idx < 4)
                        .map(({ ...props }) =>
                            <CollectionItem {...props} />
                        ))
                }
            </div>
        </div>
    )
}
