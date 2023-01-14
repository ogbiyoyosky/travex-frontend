import React, { forwardRef } from 'react';
import { Flex, Textarea as ChakraTextarea } from '@chakra-ui/react';
import colors from 'config/colors';
import Typography from 'components/Typography';

const Textarea = forwardRef(function Textarea(props, ref) {
  const { tip, isInvalid, errorMsg, id, label, isRequired, ...rest } = props;
  return (
    <Flex direction="column" width="100%">
      <Typography as="label" textStyle="13" color="gray.400" mb="6px" htmlFor={id}>
        {label}
        {isRequired && <sup>*</sup>}
      </Typography>
      <ChakraTextarea
        id={id}
        ref={ref}
        borderRadius={'10px'}
        isInvalid={isInvalid}
        _focus={{
          border: '1px solid',
          borderColor: 'secondary.500',
          outline: 'none',
          boxShadow: 'none',
          borderRadius: '10px',
        }}
        _placeholder={{
          color: 'gray.200',
        }}
        _hover={{
          border: `1px solid ${colors.gray[200]}`,
          outline: 'none',
          boxShadow: 'none',
          borderRadius: '10px',
        }}
        _invalid={{
          border: `1px solid ${colors.error[500]}`,
          boxShadow: 'none',
          outline: 'none',
          _focus: {
            border: `1px solid ${colors.error[500]}`,
            boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
            outline: 'none',
          },
        }}
        {...rest}
      />
      {tip || isInvalid ? (
        <Typography
          textStyle={isInvalid ? '14' : '13'}
          color={isInvalid ? 'error.500' : 'gray.400'}
          mt="6px"
        >
          {isInvalid ? errorMsg : tip}
        </Typography>
      ) : null}
    </Flex>
  );
});

export default Textarea;
