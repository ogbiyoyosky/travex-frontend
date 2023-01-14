import React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Flex, Link as RLink } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import colors from 'config/colors';

const Link = forwardRef(function Link(props, ref) {
  const {
    href,
    isNav = false,
    fontWeight = 500,
    color = 'gray.300',
    activeLinkStyle = { color: colors.secondary[500] },
    alignItems = 'center',
    textStyle,
    style,
    children,
    ...rest
  } = props;

  return (
    <Flex
      ref={ref}
      as={isNav ? NavLink : RLink}
      to={href}
      href={href}
      alignItems={alignItems}
      textStyle={textStyle}
      color={color}
      fontWeight={fontWeight}
      _focus={{
        color: 'gray.500',
      }}
      style={isNav ? ({ isActive }) => (isActive ? activeLinkStyle : undefined) : style}
      {...rest}
    >
      {children}
    </Flex>
  );
});

export default Link;

Link.propTypes = {
  as: PropTypes.element,
  href: PropTypes.string,
  alignItems: PropTypes.string,
  textStyle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  activeLinkStyle: PropTypes.object,
};
