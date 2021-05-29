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
        mx={["2.4375rem", "18.75rem"]}
        my={["1.25rem", "3.25rem"]}
        fontWeight={500}
        fontSize={["20px", "36px"]}
        lineHeight={["30px", "54px"]}
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
