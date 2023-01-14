import React, { forwardRef } from 'react';
import { Radio as ChakraRadio } from '@chakra-ui/react';

const Radio = forwardRef(function Radio(props, ref) {
  const { children, ...rest } = props;
  return (
    <ChakraRadio ref={ref} {...rest}>
      {children}
    </ChakraRadio>
  );
});

export default Radio;
