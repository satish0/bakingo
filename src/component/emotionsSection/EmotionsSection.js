import React from 'react'
import './EmotionsSection.css'
import emotion1 from '../../assets/images/emotion-1.jpeg';
import emotion2 from '../../assets/images/emotion-2.jpeg';
import emotion3 from '../../assets/images/emotion-3.jpeg';

function EmotionsSection() {
    return (
        <React.Fragment>
            <section className="emotions-section">
                <div className="wrapper-1320">
                    <div className="emotions-section-middle">
                        <div className="emotions-section-inner emotions-row">
                            <div className="emotions-content d-sm-none">
                                <h4>Deliveing Emotions</h4>
                                <p>lorem ipssum lorem ipssum lorem ipssum lorem ipssum lorem ipssum lorem ipssum</p>
                                <a href="javascript:;">SEND NOW</a>
                            </div>
                            <div className="emotions-column">
                                <div className="emotions-content d-none d-sm-block">
                                    <h4>Deliveing Emotions</h4>
                                    <p>lorem ipssum lorem ipssum lorem ipssum lorem ipssum lorem ipssum lorem ipssum</p>
                                    <a href="javascript:;">SEND NOW</a>
                                </div>
                                <div className="emotions-column-1">
                                    <div><img src={emotion1} /></div>
                                    <div><img src={emotion2} /></div>
                                </div>
                            </div>
                            <div className="emotions-column">
                                <img src={emotion3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EmotionsSection
