import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData}: ProfileProps){
    return(
        <Flex
            align="center"
        >
            {showProfileData&&
                <Box mr="4" textAlign="right">
                    <Text>Érico Bandeira</Text>
                    <Text color="gray.300" fontSize="small">
                        ericobandeira@hotmail.com
                    </Text>
                </Box>
            }
            
            <Avatar size="md" name="Érico Bandeira" src="https://github.com/ericoBandeira.png"/>
        </Flex>
    );
}