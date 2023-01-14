import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';

function Loader(props) {
  const {
    height = '100vh',
    width = '100vw',
    alignItems = 'center',
    justifyContent = 'center',
    thickness = '2px',
    speed = '0.65s',
    emptyColor = 'gray.200',
    color = 'primary',
    size = 'xl',
    ...containerStyle
  } = props;
  return (
    <Flex
      height={height}
      width={width}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...containerStyle}
    >
      <Spinner
        thickness={thickness}
        speed={speed}
        emptyColor={emptyColor}
        color={color}
        size={size}
      />
    </Flex>
  );
}

export default Loader;
