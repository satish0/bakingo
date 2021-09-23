import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import './BannerSection.css';
import bannerimgd1 from '../../../assets/images/banner-1.png';
import bannerimgd2 from '../../../assets/images/banner-1.png';
import bannerimgm1 from '../../../assets/images/banner-mobile.png';
import bannerimgm2 from '../../../assets/images/banner-mobile.png';

SwiperCore.use([Navigation, Pagination]);

const bannersection = (props) => {
    // let bannerimgd = [bannervideo, bannerimgd1, bannerimgd2];
    // let bannerimgm = [bannervideo, bannerimgm1, bannerimgm2];

    return(
        <React.Fragment>
            <Swiper 
                id="pr-banner-swiper" 
                className="pr-banner-swiper" 
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                onInit={(swiper) => console.log('Swiper intialized!', swiper)}
                onSlideChange={(swiper) => console.log('Slide index changed to:', swiper.activeIndex ) }
                onReachEnd={() => console.log('Swiper end reached')} >
                <SwiperSlide>
                    <div className="banner-item">
                        <div className="banner-img">
                            <picture>
                                <source media="(max-width: 575px)" srcSet={bannerimgm1} />
                                <img className="w-100" src={bannerimgd1} alt="banner" />
                            </picture>
                        </div>
                        <div className="container d-sm-none">
                            <div className="row">
                                <div className="banner-text">
                                    <h2 className="banner-heading top-bar">Plan a week full of love</h2>
                                    <p>lorem ipsum lorem ipsum lorem ipsum lorem</p>
                                    <a target="_blank" href="javascript:;">Plan Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-item">
                        <div className="banner-img">
                            <picture>
                                <source media="(max-width: 575px)" srcSet={bannerimgm2} />
                                <img className="w-100" src={bannerimgd2} alt="banner" />
                            </picture>
                        </div>
                        <div className="container d-sm-none">
                            <div className="row">
                                <div className="banner-text">
                                    <h2 className="banner-heading top-bar">Plan a week full of love</h2>
                                    <p>lorem ipsum lorem ipsum lorem ipsum lorem</p>
                                    <a target="_blank" href="javascript:;">Plan Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-item">
                        <div className="banner-img">
                            <picture>
                                <source media="(max-width: 575px)" srcSet={bannerimgm1} />
                                <img className="w-100" src={bannerimgd1} alt="banner" />
                            </picture>
                        </div>
                        <div className="container d-sm-none">
                            <div className="row">
                                <div className="banner-text">
                                    <h2 className="banner-heading top-bar">Plan a week full of love</h2>
                                    <p>lorem ipsum lorem ipsum lorem ipsum lorem</p>
                                    <a target="_blank" href="javascript:;">Plan Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    );
}

export default bannersection;