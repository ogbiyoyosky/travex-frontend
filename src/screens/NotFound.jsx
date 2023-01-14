import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Flex
      alignItems={'center'}
      justifyContent="center"
      direction={'column'}
      height="100%"
      minH="450px"
    >
      <Text>Oooops!!! not found</Text>
      <Text my={2}>Click the button below to go back</Text>

      <Button mode="secondary" variant="solid" mt={6} onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </Flex>
  );
}
export default NotFound;
