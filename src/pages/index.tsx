import { Center, Divider, Text } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />

      <Center>
        <Divider w="5rem" border="1px" borderColor="gray.500" />
      </Center>

      <Text
        px="2.4375rem"
        py="1.25rem"
        fontWeight="500"
        fontSize="20px"
        lineHeight="30px"
        color="gray.600"
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <ContinentsSlide />
    </>
  )
}
