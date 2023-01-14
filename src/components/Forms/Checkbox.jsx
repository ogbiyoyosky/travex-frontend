import React, { forwardRef } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

const Checkbox = forwardRef(function Checkbox(props, ref) {
  const { children, ...rest } = props;
  return (
    <ChakraCheckbox ref={ref} {...rest}>
      {children}
    </ChakraCheckbox>
  );
});

export default Checkbox;
