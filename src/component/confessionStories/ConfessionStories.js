import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import './ConfessionStories.css';
import confession1 from '../../assets/images/confession1.png';
import confession2 from '../../assets/images/confession2.png';
import heart_seprator_white from '../../assets/images/heart-seprator-white.png';
import confession_frame from '../../assets/images/confession-frame.png';

SwiperCore.use([Navigation, Pagination]);

function ConfessionStories() {
    return (
        <section className="confession_stories">
            <div className="wrapper-1320">
                <div className="confession_stories_inner">
                    <div className="confession_stories_left">
                        <div className="confession-image">
                            <img className="frame" src={confession_frame} />
                        <React.Fragment>
                            <Swiper 
                                id="pr-confession-swiper1" 
                                className="pr-confession-swiper1 slider-one" 
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
                                                <source media="(max-width: 575px)" srcSet={confession1} />
                                                <img className="w-100" src={confession1} alt="banner" />
                                            </picture>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="banner-item">
                                        <div className="banner-img">
                                            <picture>
                                                <source media="(max-width: 575px)" srcSet={confession2} />
                                                <img className="w-100" src={confession2} alt="banner" />
                                            </picture>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="banner-item">
                                        <div className="banner-img">
                                            <picture>
                                                <source media="(max-width: 575px)" srcSet={confession1} />
                                                <img className="w-100" src={confession1} alt="banner" />
                                            </picture>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </React.Fragment>
                        </div>
                    </div>
                    <div className="confession_stories_right">
                        <React.Fragment>
                            <Swiper 
                                id="pr-confession-swiper2" 
                                className="pr-confession-swiper2 slider-two" 
                                navigation
                                pagination={{ clickable: true }}
                                spaceBetween={0}
                                slidesPerView={1}
                                onInit={(swiper) => console.log('Swiper intialized!', swiper)}
                                onSlideChange={(swiper) => console.log('Slide index changed to:', swiper.activeIndex ) }
                                onReachEnd={() => console.log('Swiper end reached')} >
                                <SwiperSlide>
                                    <div className="banner-item">
                                        <div className="banner-text">
                                            <h4>Confession Stories</h4>
                                            <img className="heart-img" src={heart_seprator_white} />
                                            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                                            <a href="javascript:;">Read Aman's Love Story</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="banner-item">
                                        <div className="banner-text">
                                            <h4>Confession Stories</h4>
                                            <img className="heart-img" src={heart_seprator_white} />
                                            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                                            <a href="javascript:;">Read Aman's Love Story</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="banner-item">
                                        <div className="banner-text">
                                            <h4>Confession Stories</h4>
                                            <img className="heart-img" src={heart_seprator_white} />
                                            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                                            <a href="javascript:;">Read Aman's Love Story</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </React.Fragment>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConfessionStories