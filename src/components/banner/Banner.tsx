import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='mainBanner'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                loop={true}
            >
                <SwiperSlide>
                    <div className="swiper-inner">
                        <Link to={''}>
                            <img src="/img/banner/ms_banner_img1.jpg" alt="" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-inner">
                        <Link to={''}>
                            <img src="/img/banner/ms_banner_img2.jpg" alt="" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-inner">
                        <Link to={''}>
                            <img src="/img/banner/ms_banner_img3.jpg" alt="" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-inner">
                        <Link to={''}>
                            <img src="/img/banner/ms_banner_img4.jpg" alt="" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-inner">
                        <Link to={''}>
                            <img src="/img/banner/ms_banner_img5.jpg" alt="" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-inner">
                        <Link to={''}>
                            <img src="/img/banner/ms_banner_img6.jpg" alt="" />
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Banner
