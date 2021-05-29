import { HStack, Image, ListItem, Text, UnorderedList, useBreakpointValue, VStack } from '@chakra-ui/react';

import { TravelTypesItem } from './TravelTypesItem';
import { TravelTypesRow } from './TravelTypesRow';

export function TravelTypes() {
    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true,
    })

    if (isWideScreen) {
        return (
            <HStack
                h={36}
                mx={36}
                my={20}
                spacing="auto"
                alignItems="center"
            >
                <VStack>
                    <Image src="nightlife.svg" />
                    <Text
                        fontWeight={600}
                        fontSize="24px"
                        lineHeight="36px"
                    >
                        vida noturna
                    </Text>
                </VStack>
                <VStack>
                    <Image src="beach.svg" />
                    <Text
                        fontWeight={600}
                        fontSize="24px"
                        lineHeight="36px"
                    >
                        praia
                    </Text>
                </VStack>
                <VStack>
                    <Image src="modern.svg" />
                    <Text
                        fontWeight={600}
                        fontSize="24px"
                        lineHeight="36px"
                    >
                        moderno
                    </Text>
                </VStack>
                <VStack>
                    <Image src="classic.svg" />
                    <Text
                        fontWeight={600}
                        fontSize="24px"
                        lineHeight="36px"
                    >
                        clássico
                    </Text>
                </VStack>
                <VStack>
                    <Image src="more.svg" />
                    <Text
                        fontWeight={600}
                        fontSize="24px"
                        lineHeight="36px"
                    >
                        e mais...
                    </Text>
                </VStack>
            </HStack>
        )
    }

    return (
        <VStack
            h="12rem"
            px="3.125rem"
            py="2.25rem"
            justifyContent="space-between"
        >
            <TravelTypesRow>
                <TravelTypesItem>vida noturna</TravelTypesItem>
                <TravelTypesItem>praia</TravelTypesItem>
            </TravelTypesRow>

            <TravelTypesRow>
                <TravelTypesItem>moderno</TravelTypesItem>
                <TravelTypesItem>clássico</TravelTypesItem>
            </TravelTypesRow>

            <TravelTypesRow justify="center">
                <TravelTypesItem>e mais...</TravelTypesItem>
            </TravelTypesRow>
        </VStack>
    )
}