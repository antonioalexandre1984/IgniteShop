import { styled } from '..'

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: '1180px',
    margin: '0 auto',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: '576px',
    height: 656,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '8px',
    padding: '0.25rem',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    img: {
        objectFit: 'cover',
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$lg',
        color: '$gray3',
    },
    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$lg',
        color: '$green'
    },
    p: {
        marginTop: '2.5rem',
        fontSize: '$xs',
        lineHeight: 1.6,
        color: '$gray3',
    },
    button: {
        marginTop: 'auto',
        backgroundColor: '$green',
        border: 0,
        color: '$white',
        borderRadius: '8px',
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$sm',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed'
        },

        '&:hover': {
            filter: 'brightness(0.9)'
        }
    }

})