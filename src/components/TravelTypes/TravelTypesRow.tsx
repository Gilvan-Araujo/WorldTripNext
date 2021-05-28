import { List } from "@chakra-ui/react"
import { ReactNode } from "react"

type TravelTypesRowProps = {
    children: ReactNode,
    justify?: string
}

export function TravelTypesRow({ children, justify = 'space-between' }: TravelTypesRowProps) {
    return (
        <List
            w={'full'}
            display="flex"
            flexDirection="row"
            justifyContent={justify}
        >
            {children}
        </List>
    )
}