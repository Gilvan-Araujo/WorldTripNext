
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from '@chakra-ui/react';
import { ContinentImage } from './ContinentImage';

SwiperCore.use([Pagination, Navigation]);

export function ContinentsSlide() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination={{ "clickable": true }}
            navigation={true}
        >

            <SwiperSlide>
                <ContinentImage name="europe" />
            </SwiperSlide>
            <SwiperSlide>
                <ContinentImage name="asia" />
            </SwiperSlide>
            
        </Swiper>
    )
}