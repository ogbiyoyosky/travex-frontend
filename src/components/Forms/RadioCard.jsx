import { Box, useRadio } from '@chakra-ui/react';
import React from 'react';

export default function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        color="gray.400"
        _checked={{
          bg: 'gray.400',
          color: 'white',
          borderColor: 'gray.400',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        fontSize={{ base: '14px', sm: '16px' }}
        px={{ base: 3, sm: 5 }}
        py={{ base: 2, sm: 3 }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
