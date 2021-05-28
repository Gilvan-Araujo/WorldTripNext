import { Box, Flex, Image } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex
            w={'full'}
            h={[12, 24]}
            justify="center"
            alignItems="center"
        >
            <Image
                src="/logo.svg"
                h={["1.25rem", "2.875rem"]}
                w={["5rem", "11.5rem"]}
            />
        </Flex>
    )
}