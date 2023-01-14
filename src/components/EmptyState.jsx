import { Center, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import Typography from './Typography';
import { TbAlertCircle } from 'react-icons/tb';

function EmptyState(props) {
  const {
    heading,
    message,
    btn,
    bg = 'gray.25',
    maxWidth = '640px',
    width = '100%',
    height = '300px',
  } = props;
  return (
    <Center>
      <Flex
        width={width}
        height={height}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        maxWidth={maxWidth}
        bg={bg}
        p={'20px'}
        borderRadius={16}
      >
        <Icon as={TbAlertCircle} mb="16px" fontSize="30px" />
        <Typography textStyle="11" textAlign="center" fontWeight={500} mb="16px">
          {heading}
        </Typography>
        <Typography textStyle="12" textAlign="center" fontWeight={400} mb={btn ? '16px' : '0px'}>
          {message}
        </Typography>
        {btn}
      </Flex>
    </Center>
  );
}

export default EmptyState;
