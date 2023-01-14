import React, { forwardRef } from 'react';
import { Tag as ChakraTag } from '@chakra-ui/react';
const Tag = forwardRef(function Tag(props, ref) {
  const { children, ...rest } = props;
  return (
    <ChakraTag ref={ref} {...rest}>
      {children}
    </ChakraTag>
  );
});

export default Tag;
