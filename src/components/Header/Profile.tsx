import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Érico Bandeira</Text>
                <Text color="gray.300" fontSize="small">
                    ericobandeira@hotmail.com
                </Text>
            </Box>
            <Avatar size="md" name="Érico Bandeira" src="https://github.com/ericoBandeira.png"/>
        </Flex>
    );
}