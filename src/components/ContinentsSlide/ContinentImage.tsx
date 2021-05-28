import { SwiperSlide } from 'swiper/swiper-react';

import { Image } from '@chakra-ui/react';

type ContinentImageProps = {
    name: string
}

export function ContinentImage({ name }: ContinentImageProps) {
    return (
        <Image
            src={`/images/continents/${name}.jpg`}
            w={'full'}
            h="15.625rem"
            objectFit="cover"
        />
    )
}