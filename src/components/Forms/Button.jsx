import React, { forwardRef } from 'react';
import { Button as ChakraButton, IconButton } from '@chakra-ui/react';

const Button = forwardRef(function Button(props, ref) {
  const { icon, children, ...rest } = props;
  return (
    <>
      {icon ? (
        <IconButton ref={ref} withicon="true" icon={icon} {...rest}>
          {children}
        </IconButton>
      ) : (
        <ChakraButton ref={ref} {...rest}>
          {children}
        </ChakraButton>
      )}
    </>
  );
});
export default Button;
