import { Grid, Heading } from "@chakra-ui/react";

export default function Cities() {
    return (
        <>
            <Heading
                fontWeight="500"
                fontSize={["2xl", "4xl"]}
                mb={10}
            >Cidades +100 </Heading>
            <Grid
                templateColumns={["1fr",
                    "1fr 1fr",
                    "repeat(3, 1fr)",
                    "repeat(3, 1fr)"]}
                gap={["20px",
                    "45px"]}
                alignItems="justify-content"
                justifyContent="center"
                px={["30px", 8]}
            >

            </Grid>
        </>
    )
}