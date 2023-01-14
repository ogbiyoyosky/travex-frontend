import React, { forwardRef, useState } from 'react';
import {
  Flex,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Typography from 'components/Typography';

const Input = forwardRef(function Input(props, ref) {
  const {
    leftElement,
    leftElementWidth,
    rightElementWidth,
    rightElement,
    rightAddon,
    rightAdddonProps = {},
    leftAdddon,
    leftAdddonProps = {},
    type,
    tip,
    isInvalid,
    errorMsg,
    id,
    label,
    isRequired,
    ...rest
  } = props;
  const [show, setShow] = useState(false);

  return (
    <Flex direction="column" width="100%">
      <Typography as="label" textStyle="13" color="gray.400" mb="6px" htmlFor={id}>
        {label}
        {isRequired && <sup>*</sup>}
      </Typography>
      <InputGroup>
        {leftElement ? (
          <InputLeftElement pointerEvents="none" width={leftElementWidth} height={'100%'}>
            {leftElement}
          </InputLeftElement>
        ) : null}
        {leftAdddon && <InputLeftAddon {...leftAdddonProps}>{leftAdddon}</InputLeftAddon>}

        <ChakraInput
          paddingLeft={leftElementWidth ? leftElementWidth : leftElement ? '2.5rem' : '1rem'}
          paddingRight={rightElementWidth ? rightElementWidth : '2.5rem'}
          type={type === 'password' ? (show ? 'text' : 'password') : type}
          isInvalid={isInvalid}
          id={id}
          isRequired={isRequired}
          ref={ref}
          {...rest}
        />

        {rightElement || type === 'password' ? (
          <InputRightElement
            pointerEvents={type !== 'password' && 'none'}
            onClick={() => {
              if (type === 'password') {
                setShow(!show);
              }
            }}
            width={rightElementWidth}
            height={'100%'}
          >
            {type === 'password' ? (
              <IconButton
                bg="inherit"
                color="gray.500"
                _hover={{ bg: 'inherit' }}
                _focus={{ bg: 'inherit' }}
                _active={{ bg: 'inherit' }}
              >
                {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </IconButton>
            ) : (
              rightElement
            )}
          </InputRightElement>
        ) : null}

        {rightAddon && (
          <InputRightAddon border="none" {...rightAdddonProps}>
            {rightAddon}
          </InputRightAddon>
        )}
      </InputGroup>
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

export default Input;
