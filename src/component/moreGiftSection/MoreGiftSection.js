import React from 'react'
import heart_seprator from '../../assets/images/heart-seprator.png'
import MoreGiftListing from './moregiftListing/MoreGiftListing'
import './MoreGiftSection.css'


function MoreGiftSection() {
    return (
        <React.Fragment>
            <section className="bg-heart-image">
                <div className="bg-heart-image-inner">
                    <h4>More Gifts For Loved One</h4>
                    <img className="heart-img" src={heart_seprator} />
                    <div className="gift-listing">
                        <MoreGiftListing />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default MoreGiftSection
