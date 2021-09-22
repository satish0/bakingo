import React from 'react'
import './GiftSection.css'
import heartseprator from '../../assets/images/heart-seprator.png'
import GiftListing from './giftListing/GiftListing'

function GiftSection() {
    return (
        <React.Fragment>
            <section className="pink-section">
                <div className="wrapper-1320">
                    <div className="bg-pink">
                        <div className="heading-and-img">
                            <div className="heading">
                                <h3 className="Send-Gift-heading">Send Gift to Your Loved Ones</h3>
                                <p className="Send-Gift-subheading">Send Gift to Your Loved Ones</p>
                            </div>
                            <div className="rose-day-img-text">    
                                <div className="img-text">
                                    <span className="date">7-Feb</span>
                                    <img src={heartseprator} />
                                    <span className="day">Rose <br /> day</span>
                                </div>
                            </div>
                        </div>
                        <div className="gift-listing">
                            <GiftListing />
                        </div>
                    </div>
                </div>    
            </section>
        </React.Fragment>
    )
}

export default GiftSection
