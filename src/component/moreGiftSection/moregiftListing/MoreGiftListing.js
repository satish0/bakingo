import React from 'react'
import './MoreGiftListing.css'
import moregift1 from '../../../assets/images/more-gift1.png';
import moregift2 from '../../../assets/images/more-gift2.png';
import moregift3 from '../../../assets/images/more-gift3.png';
import moregift4 from '../../../assets/images/more-gift4.png';
import moregift5 from '../../../assets/images/more-gift5.png';
import moregift6 from '../../../assets/images/more-gift6.png';
import moregift7 from '../../../assets/images/more-gift7.png';
import moregift8 from '../../../assets/images/more-gift8.png';

function MoreGiftListing() {
    return (
        <React.Fragment>
            <ul className="mgift-listing-inner">
                <li>
                    <img src={moregift1} />
                    <p className="img-caption">Flowers</p>
                </li>
                <li>
                    <img src={moregift2} />
                    <p className="img-caption">Flowers</p>
                </li>
                <li>
                    <img src={moregift3} />
                    <p className="img-caption">Flowers</p>
                </li>
                <li>
                    <img src={moregift4} />
                    <p className="img-caption">Flowers</p>
                </li>
                <li>
                    <img src={moregift5} />
                    <p className="img-caption">Flowers</p>
                </li>
                <li>
                    <img src={moregift6} />
                    <p className="img-caption">Flowers</p>
                </li>
                <li>
                    <img src={moregift7} />
                    <p className="img-caption">Flowers</p>
                </li>
                <li>
                    <img src={moregift8} />
                    <p className="img-caption">Flowers</p>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default MoreGiftListing
