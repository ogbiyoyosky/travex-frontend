import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import textStyles from './textstyles';

const theme = extendTheme({
  colors,
  textStyles,
  styles: {
    global: {
      body: {
        fontFamily: `'Lexend', sans-serif`,
        fontWeight: 400,
      },
      heading: {
        heading: `'Lexend', sans-serif`,
        fontWeight: 700,
      },
      a: {
        textDecoration: 'none',
        fontSize: '15px',
        padding: '0 6px',
        fontWeight: 'bold',
        color: 'primary.500',
        _hover: {
          color: 'secondary.500',
          textDecoration: 'underline',
          border: 'none ',
        },
        _activeLink: { color: 'primary.500', boxShadow: 'none' },
        _active: {
          color: 'primary.500',
          textDecoration: 'underline',
          border: 'none ',
          outline: 'none ',
        },
        _focus: {
          color: 'primary.500',
          textDecoration: 'underline',
          border: 'none ',
          outline: 'none ',
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: '10px',
        fontSize: '16px',
        height: '45px',
        bg: 'primary.500',
        color: 'white',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
      defaultProps: {
        variant: 'solid',
        size: 'lg',
      },
      sizes: {
        sm: (props) => ({
          fontWeight: 500,
          height: '40px',
          fontSize: '14px',
          padding: '8px 12px',
          width: props.withicon === 'true' ? '40px' : '80px',
        }),
        md: (props) => ({
          fontWeight: 500,
          height: '45px',
          fontSize: '16px',
          padding: '8px 12px',
          width: props.withicon === 'true' ? '50px' : '100px',
        }),
        lg: (props) => ({
          fontWeight: 500,
          height: '50px',
          fontSize: '18px',
          padding: '8px 12px',
          width: props.withicon === 'true' ? '75px' : '150px',
        }),
      },
      variants: {
        solid: (props) => ({
          bg:
            props.mode === 'primary'
              ? 'primary.500'
              : props.mode === 'secondary'
              ? 'secondary.400'
              : props.mode === 'accent'
              ? 'gray.100'
              : 'primary.500',
          color: props.mode === 'accent' ? 'gray.400' : 'white',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          _hover: {
            _disabled: {
              background:
                props.mode === 'primary'
                  ? 'primary.500'
                  : props.mode === 'secondary'
                  ? 'secondary.400'
                  : props.mode === 'accent'
                  ? 'gray.100'
                  : 'primary.500',
            },
            bg:
              props.mode === 'primary'
                ? 'primary.600'
                : props.mode === 'secondary'
                ? 'secondary.600'
                : props.mode === 'accent'
                ? 'gray.200'
                : 'primary.600',
          },
          _focus: {
            bg:
              props.mode === 'primary'
                ? 'primary.600'
                : props.mode === 'secondary'
                ? 'secondary.600'
                : props.mode === 'accent'
                ? 'gray.200'
                : 'primary.600',
            boxShadow:
              props.mode === 'primary'
                ? `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.primary[50]}`
                : props.mode === 'secondary'
                ? `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.secondary[50]}`
                : props.mode === 'accent'
                ? `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.gray[50]}`
                : `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.primary[50]}`,
          },
          _disabled: {
            opacity: 0.2,
          },
        }),
        outline: (props) => ({
          bg: 'transparent',
          color:
            props.mode === 'primary'
              ? 'primary.500'
              : props.mode === 'secondary'
              ? 'secondary.400'
              : 'primary.500',
          border:
            props.mode === 'primary'
              ? `1px solid ${colors.primary[500]}`
              : props.mode === 'secondary'
              ? `1px solid ${colors.secondary[500]}`
              : `1px solid ${colors.primary[500]}`,
          borderColor:
            props.mode === 'primary'
              ? 'primary.500'
              : props.mode === 'secondary'
              ? 'secondary.400'
              : 'primary.500',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          _hover: {
            color:
              props.mode === 'primary'
                ? 'primary.600'
                : props.mode === 'secondary'
                ? 'secondary.600'
                : 'primary.600',
          },
          _focus: {
            color:
              props.mode === 'primary'
                ? 'primary.600'
                : props.mode === 'secondary'
                ? 'secondary.600'
                : 'primary.600',
            boxShadow:
              props.mode === 'primary'
                ? `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.primary[50]}`
                : props.mode === 'secondary'
                ? `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.secondary[50]}`
                : `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.primary[50]}`,
          },
          _disabled: {
            //TODO: set up styles for this disabled
          },
        }),
        ghost: (props) => ({
          bg: 'transparent',
          color:
            props.mode === 'primary'
              ? 'primary.500'
              : props.mode === 'secondary'
              ? 'secondary.500'
              : 'primary.500',
          boxShadow: 'none',
          _hover: {
            color:
              props.mode === 'primary'
                ? 'primary.600'
                : props.mode === 'secondary'
                ? 'secondary.600'
                : 'primary.600',
          },
          _focus: {
            color:
              props.mode === 'primary'
                ? 'primary.600'
                : props.mode === 'secondary'
                ? 'secondary.600'
                : 'primary.600',
          },
        }),
        link: (props) => ({
          bg: 'transparent',
          color:
            props.mode === 'primary'
              ? 'primary.500'
              : props.mode === 'secondary'
              ? 'secondary.500'
              : 'primary.500',
          boxShadow: 'none',
          _hover: {
            color:
              props.mode === 'primary'
                ? 'primary.600'
                : props.mode === 'secondary'
                ? 'secondary.600'
                : 'primary.600',
          },
          _focus: {
            color:
              props.mode === 'primary'
                ? 'primary.600'
                : props.mode === 'secondary'
                ? 'secondary.600'
                : 'primary.600',
          },
        }),
        naked: (props) => ({
          bg: 'transparent',
          color:
            props.mode === 'primary'
              ? 'primary.500'
              : props.mode === 'secondary'
              ? 'secondary.500'
              : 'primary.500',
          boxShadow: 'none',
          _focus: {
            color:
              props.mode === 'primary'
                ? 'primary.600'
                : props.mode === 'secondary'
                ? 'secondary.600'
                : 'primary.600',
          },
        }),
      },
    },
    Input: {
      baseStyle: {
        field: {},
      },
      defaultProps: {
        variant: 'outline',
        size: 'lg',
      },
      sizes: {
        sm: {
          field: { fontWeight: 400, height: '40px', fontSize: '14px', padding: '8px 12px' },
        },
        md: {
          field: { fontWeight: 400, height: '45px', fontSize: '16px', padding: '8px 12px' },
        },
        lg: {
          field: { fontWeight: 400, height: '50px', fontSize: '16px', padding: '8px 12px' },
        },
      },
      variants: {
        outline: {
          field: {
            border: `1px solid ${colors.secondary[100]}`,
            boxShadow: 'none',
            borderRadius: '10px',
            _invalid: {
              border: `1px solid ${colors.error[500]}`,
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                border: `1px solid ${colors.error[500]}`,
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },
            _placeholder: {
              color: 'secondary.200',
            },
            _hover: {
              border: `1px solid ${colors.secondary[200]}`,
              outline: 'none',
            },
            _focus: {
              border: '1px solid',
              borderColor: 'secondary.500',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        filled: {
          field: {
            bg: 'secondary.100',
            _invalid: {
              border: `1px solid ${colors.error[500]}`,
              boxShadow: 'none',
              borderRadius: '10px',
              outline: 'none',
              _focus: {
                border: `1px solid ${colors.error[500]}`,
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },
            _placeholder: {
              color: 'secondary.200',
            },
            _hover: {
              bg: 'secondary.100',
            },
            _focus: {
              border: '1px solid',
              borderColor: 'secondary.500',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        flushed: {
          field: {
            borderBottom: `1px solid ${colors.secondary[100]}`,
            borderBottomColor: 'secondary.100',
            borderRadius: '10px',
            _invalid: {
              borderBottom: `1px solid ${colors.error[500]}`,
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                borderBottom: `1px solid ${colors.error[500]}`,
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },
            _placeholder: {
              color: 'secondary.200',
            },
            _hover: {
              borderBottom: `1px solid ${colors.secondary[200]}`,
              outline: 'none',
            },
            _focus: {
              borderBottom: '1px solid',
              borderBottomColor: 'secondary.500',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        unstyled: {
          field: {
            _placeholder: {
              color: 'secondary.200',
            },
            _invalid: {
              color: 'error.500',
            },
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {},
      },
      defaultProps: {
        variant: 'outline',
        size: 'lg',
      },
      sizes: {
        sm: {
          field: { fontWeight: 400, height: '40px', fontSize: '14px', padding: '8px 12px' },
        },
        md: {
          field: { fontWeight: 400, height: '45px', fontSize: '16px', padding: '8px 12px' },
        },
        lg: {
          field: { fontWeight: 400, height: '50px', fontSize: '16px', padding: '8px 12px' },
        },
      },
      variants: {
        outline: {
          field: {
            border: `1px solid ${colors.secondary[100]}`,
            boxShadow: 'none',
            borderRadius: '10px',
            _invalid: {
              border: `1px solid ${colors.error[500]}`,
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                border: `1px solid ${colors.error[500]}`,
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },

            _hover: {
              border: `1px solid ${colors.secondary[200]}`,
              outline: 'none',
            },
            _focus: {
              border: '1px solid',
              borderColor: 'secondary.500',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        filled: {
          field: {
            bg: 'secondary.100',
            borderRadius: '10px',
            _invalid: {
              border: `1px solid ${colors.error[500]}`,
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                border: `1px solid ${colors.error[500]}`,
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },

            _hover: {
              bg: 'secondary.100',
            },
            _focus: {
              border: '1px solid',
              borderColor: 'secondary.500',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        flushed: {
          field: {
            borderBottom: `1px solid ${colors.secondary[100]}`,
            borderBottomColor: 'secondary.100',
            borderRadius: '10px',
            _invalid: {
              borderBottom: `1px solid ${colors.error[500]}`,
              boxShadow: 'none',
              outline: 'none',
              _focus: {
                borderBottom: `1px solid ${colors.error[500]}`,
                boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
                outline: 'none',
              },
            },
            _hover: {
              borderBottom: `1px solid ${colors.secondary[200]}`,
              outline: 'none',
            },
            _focus: {
              borderBottom: '1px solid',
              borderBottomColor: 'secondary.500',
              boxShadow: '0px 1px 2px rgba(77, 111, 255, 0.05)',
              outline: 'none',
            },
            _disabled: {
              opacity: 0.5,
            },
          },
        },
        unstyled: {
          field: {
            _invalid: {
              color: 'error.500',
            },
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        field: {},
      },
      defaultProps: {
        variant: 'outline',
        size: 'lg',
      },
      sizes: {
        sm: {
          fontWeight: 400,
          fontSize: '14px',
          padding: '8px 12px',
        },
        md: {
          fontWeight: 400,
          fontSize: '16px',
          padding: '8px 12px',
        },
        lg: {
          fontWeight: 400,
          fontSize: '16px',
          padding: '8px 12px',
        },
      },
    },
    Checkbox: {
      defaultProps: {
        colorScheme: 'primary',
      },
    },
    Radio: {
      defaultProps: {
        colorScheme: 'primary',
      },
    },
    Switch: {
      defaultProps: {
        colorScheme: 'primary',
      },
    },
    Tag: {
      defaultProps: {
        colorScheme: 'primary',
      },
    },
  },

  breakpoints: {
    xs: '300px',
    sm: '600px',
    md: '800px',
    lg: '1000px',
    xl: '1200px',
    '2xl': '1400px',
  },
});
export default theme;
