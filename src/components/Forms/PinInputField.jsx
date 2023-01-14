import React, { forwardRef } from 'react';
import { PinInputField as ChakraPinInputField } from '@chakra-ui/react';
import colors from 'config/colors';

const PinInputField = forwardRef(function PinInputField(props, ref) {
  const { ...rest } = props;
  return (
    <ChakraPinInputField
      ref={ref}
      {...rest}
      _focus={{
        borderColor: 'primary.500',
        outline: 'none',
        boxShadow: 'none',
      }}
      _hover={{
        border: `1px solid ${colors.gray[200]}`,
        outline: 'none',
        boxShadow: 'none',
      }}
    />
  );
});

export default PinInputField;
