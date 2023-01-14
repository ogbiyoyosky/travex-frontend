import React, { forwardRef } from 'react';
import { Switch as ChakraSwitch } from '@chakra-ui/react';
const Switch = forwardRef(function Switch(props, ref) {
  const { children, ...rest } = props;
  return (
    <ChakraSwitch ref={ref} {...rest}>
      {children}
    </ChakraSwitch>
  );
});

export default Switch;
