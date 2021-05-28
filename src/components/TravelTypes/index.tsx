import { List, ListItem, ListIcon, OrderedList, UnorderedList, VStack, Box } from "@chakra-ui/react"
import { TravelTypesItem } from "./TravelTypesItem"
import { TravelTypesRow } from "./TravelTypesRow"

export function TravelTypes() {
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