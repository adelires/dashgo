import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Adelires Chelepa</Text>
          <Text color="gray.300" fontSize="small">
            adelireschelepa@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Adelires Chelepa"
        src="https://avatars.githubusercontent.com/u/7711351?v=4"
      />
    </Flex>
  );
}
