import React, {Component} from 'react';
import Bannersection from './bannersection/BannerSection';
import './HomeBanner.css'

class HomeBanner extends Component {
    render() {
        return(
            <section className="pr-banner" id="pr-banner">
                <Bannersection />
            </section>
        )
    }
}

export default HomeBanner;