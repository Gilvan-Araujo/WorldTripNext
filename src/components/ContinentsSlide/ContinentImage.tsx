import { Flex, Heading, Text, VStack } from '@chakra-ui/react';

type ContinentImageProps = {
    name: string
    description: string
    image: string
}

export function ContinentImage({ name, description, image }: ContinentImageProps) {
    return (
        <Flex
            h={["15.625rem", "28.125rem"]}
            bgImage={`/images/continents/${image}.jpg`}
            bgPos="bottom"
            bgSize="cover"
            color="gray.50"
            justifyContent="center"
            alignItems="center"
        >
            <VStack>
                <Heading
                    fontWeight="700"
                    fontSize={["24px", "48px"]}
                    lineHeight={["36px", "72px"]}
                >
                    {name}
                </Heading>
                <Text
                    fontWeight="700"
                    fontSize={["14px", "24px"]}
                    lineHeight={["21px", "36px"]}
                >
                    {description}
                </Text>
            </VStack>
        </Flex>
    )
}