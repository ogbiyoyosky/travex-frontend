import React from 'react';
import { Flex } from '@chakra-ui/react';

const Card = ({
  bg = 'white',
  border = '1px solid',
  borderColor = 'gray.100',
  borderRadius = '20px',
  boxShadow = '0px 1px 2px rgba(16, 24, 40, 0.05)',
  py = '30px',
  px = '30px',
  alignItems = 'center',
  justifyContent = 'center',
  flexDirection = 'column',
  children,
  ...rest
}) => {
  return (
    <Flex
      bg={bg}
      border={border}
      borderColor={borderColor}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      py={py}
      px={px}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Card;
