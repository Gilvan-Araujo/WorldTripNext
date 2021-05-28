import { ListIcon, ListItem, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IoEllipse } from 'react-icons/io5'

type TravelTypesItemProps = {
    children: ReactNode
}

export function TravelTypesItem({ children }: TravelTypesItemProps) {
    return (
        <ListItem
            color="gray.600"
            fontWeight="500"
            fontSize="18px"
            lineHeight="27px"
        >
            <ListIcon as={IoEllipse} color="yellow.500" w="8px" />
            {children}
        </ListItem>
    )
}