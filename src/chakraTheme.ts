import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        brand: {
            orange: '#ffb52e',
            cadet: '#8998a8',
            dark: '#2e2e2e',
            gray: '#a0acb9',
            red: '#e04a43',
            green: '#63ad0e',
            light: '#e9ebee',
            pure: '#fafafb',
            slate: '#77889a',
            white: '#fcfdfe',
            yellow: '#ed9b13',
        },
    },
    components: {
        Button: {
            variants: {
                solid: {
                    p: '6',
                    color: 'white',
                    bg: 'brand.orange',
                    _hover: { bg: 'brand.orange' },
                    _active: { bg: 'brand.orange' },
                    _focus: { boxShadow: 'none' },
                },
                outline: {
                    bg: 'transparent',
                    borderWidth: '1px',
                    color: 'brand.cadet',
                    borderColor: 'brand.light',
                    _hover: { bg: 'brand.white' },
                    _active: { bg: 'brand.light' },
                    _focus: { boxShadow: 'none' },
                },
                ghost: {
                    color: 'white',
                    bg: 'rgba(0, 0, 0, 0.25)',
                    _hover: { bg: 'rgba(0, 0, 0, 0.25)' },
                    _active: { bg: 'rgba(0, 0, 0, 0.35)' },
                    _focus: { boxShadow: 'none' },
                },
                link: {
                    p: '0',
                    height: 'full',
                    bg: 'transparent',
                    color: 'gray.500',
                    rounded: 'none',
                    _active: { bg: 'brand.light' },
                    _focus: { boxShadow: 'none' },
                },
            },
        },
        Tabs: {
            baseStyle: {
                tab: {
                    _focus: {
                        boxShadow: 'none',
                    },
                },
            },
        },
    },
})
