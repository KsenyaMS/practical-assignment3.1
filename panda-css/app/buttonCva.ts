import { cva } from '../styled-system/css'

export const buttonCva = cva({
    base: {
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold'
    },
    variants: {
        color: {
            primary: {
                backgroundColor: 'blue',
                border: '3px solid blue',
                color: 'white'
            },
            secondary: {
                backgroundColor: 'greenyellow',
                border: '3px solid green',
                color: 'green'
            }
        },
        size: {
            sm: { padding: '8px 16px', fontSize: '14px' },
            lg: { padding: '8px 16px', fontSize: '24px' }
        },
        disabled: {
            true: {
                opacity: 0.5,
                cursor: 'not-allowed'
            }
        }
    },
    compoundVariants: [
        {
            size: ['sm', 'lg'],
            color: 'primary',
            css: {
                border: '3px solid blue',
                backgroundColor: 'blue',
                borderColor: 'blue',
                color: 'white'
            }
        },
        {
            size: ['sm', 'lg'],
            color: 'secondary',
            css: {
                border: '3px solid green',
                backgroundColor: 'greenyellow',
                color: 'green'
            }
        }
    ]
})