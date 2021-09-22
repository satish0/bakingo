import React from 'react'
import './GiftListing.css'
import gift1 from '../../../assets/images/gift1.png';
import gift2 from '../../../assets/images/gift2.png';
import gift3 from '../../../assets/images/gift3.png';
import gift4 from '../../../assets/images/gift4.png';

function GiftListing() {
    return (
        <React.Fragment>
            <ul className="gift-listing-inner">
                <li>
                    <img src={gift1} />
                    <p className="img-caption"></p>
                </li>
                <li>
                    <img src={gift2} />
                    <p className="img-caption"></p>
                </li>
                <li>
                    <img src={gift3} />
                    <p className="img-caption"></p>
                </li>
                <li>
                    <img src={gift4} />
                    <p className="img-caption"></p>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default GiftListing
