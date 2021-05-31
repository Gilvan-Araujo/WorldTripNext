import { Box, HStack, Image, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

export function Banner() {
    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box
            bgImage="url('/images/banner.jpg')"
            bgPosition={["100 20%", "100 20%", "100 30%"]}
            bgSize="cover"
            objectFit="contain"
            bgRepeat="no-repeat"
            h={["10rem", "23rem"]}
            justifyContent="center"
        >
            <HStack
                spacing="12.8125rem"
                px={[5, 36]}
                pt={[7, 16]}
                pb={[7, 20]}
            >
                <VStack
                    color="gray.100"
                    align="left"
                >
                    <Text fontWeight={500} fontSize={["20px", "36px"]}>
                        6 Continentes, <br /> infinitas possibilidades.
                    </Text>
                    <Text fontWeight={400} fontSize={["14px", "20px"]}>
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </VStack>
                {isWideScreen && (
                    <Image
                        src="airplane.svg"
                        w="26rem"
                        overflow="unset"
                    />
                )}
            </HStack>
        </Box>
    )
}