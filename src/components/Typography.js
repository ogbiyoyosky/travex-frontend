import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

const Typography = forwardRef(function Typography(props, ref) {
  const { textStyle, fontWeight = 400, ...rest } = props;
  return (
    <Box ref={ref} textStyle={textStyle} fontWeight={fontWeight} {...rest}>
      {props.children}
    </Box>
  );
});

export default Typography;

Typography.propTypes = {
  fontWeight: PropTypes.number,
  textStyle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
