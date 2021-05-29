import { Flex, Heading, Text, VStack } from '@chakra-ui/react';

type ContinentImageProps = {
    name: string
    description: string
    image: string
}

export function ContinentImage({ name, description, image }: ContinentImageProps) {
    return (
        <Flex
            h="15.625rem"
            w={'full'}
            bgImage={`/images/continents/${image}.jpg`}
            bgSize="cover"
            color="gray.50"
            justifyContent="center"
            alignItems="center"
        >
            <VStack>
                <Heading
                    fontWeight="700"
                    fontSize="24px"
                    lineHeight="36px"
                >
                    {name}
                </Heading>
                <Text
                    fontWeight="700"
                    fontSize="14px"
                    lineHeight="21px"
                >
                    {description}
                </Text>
            </VStack>
        </Flex>
    )
}