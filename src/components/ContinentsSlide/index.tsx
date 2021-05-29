
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from '@chakra-ui/react';

import { ContinentImage } from './ContinentImage';

SwiperCore.use([Pagination, Navigation, Autoplay]);

export function ContinentsSlide() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination={{ "clickable": true }}
            navigation={true}
            autoplay={{
                delay: 4000,
            }}
        >
            <SwiperSlide>
                <ContinentImage
                    name="Europa"
                    description="O continente mais antigo"
                    image="europe"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ContinentImage
                    name="Ásia"
                    description="O maior dos continentes"
                    image="asia"
                />
            </SwiperSlide>
            <SwiperSlide>
                <ContinentImage
                    name="África"
                    description="O continente mais quente"
                    image="africa"
                />
            </SwiperSlide>
        </Swiper>
    )
}