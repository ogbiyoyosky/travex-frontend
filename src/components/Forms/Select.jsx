import React, { forwardRef } from 'react';
import { Flex, Select as ChakraSelect } from '@chakra-ui/react';
import Typography from 'components/Typography';

const Select = forwardRef(function Radio(props, ref) {
  const {
    children,
    value,
    defaultValue = 'DEFAULT',
    placeholder,
    options,
    tip,
    isInvalid,
    errorMsg,
    id,
    label,
    isRequired,
    ...rest
  } = props;

  return (
    <Flex direction="column" width="100%">
      <Typography as="label" textStyle="13" color="gray.400" mb="6px" htmlFor={id}>
        {label}
        {isRequired && <sup>*</sup>}
      </Typography>
      <ChakraSelect
        ref={ref}
        id={id}
        defaultValue={defaultValue}
        value={value}
        color={defaultValue === 'DEFAULT' && value === undefined ? 'gray.200' : 'black'}
        {...rest}
      >
        <option disabled value={'DEFAULT'}>
          {placeholder}
        </option>
        {options
          ? options.map((option, index) => (
              <option
                value={option.value}
                key={option.id ? option.id : option.uuid ? option.uuid : `option-${index}`}
              >
                {option.label}
              </option>
            ))
          : children}
      </ChakraSelect>
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

export default Select;
