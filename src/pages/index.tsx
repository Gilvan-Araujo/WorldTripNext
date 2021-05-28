import { Center, Divider } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
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
    </>
  )
}
