import { Box, HStack, Text, VStack } from '@chakra-ui/react'

export function Banner() {
    return (
        <Box
            bgImage="url('/images/banner.jpg')"
            bgPosition="top"
            bgSize="cover"
            objectFit="contain"
            bgRepeat="no-repeat"
            h={["10rem", "21rem"]}
        >
            <HStack>
                <VStack color="gray.100" p={5} align="left">
                    <Text fontWeight={500} fontSize="20px">
                        5 Continentes, <br /> infinitas possibilidades.
                    </Text>
                    <Text fontWeight={400} fontSize="14px">
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </VStack>
            </HStack>
        </Box>
    )
}