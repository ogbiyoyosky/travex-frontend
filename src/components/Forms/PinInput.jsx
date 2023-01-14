import React, { forwardRef } from 'react';
import { PinInput as ChakraPinInput } from '@chakra-ui/react';

const PinInput = forwardRef(function Checkbox(props, ref) {
  const { children, ...rest } = props;
  return (
    <ChakraPinInput ref={ref} {...rest}>
      {children}
    </ChakraPinInput>
  );
});

export default PinInput;
