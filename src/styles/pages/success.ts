
import { styled } from '..'


export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '656',
    margin: '0 auto',

    h1: {
        fontSize: '$lg',
        color: '$gray4',
    },
    p: {
        fontSize: '$xs',
        color: '$gray3',
        maxWidth: '560px',
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green-light',
        }
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: '130px',
    height: '145px',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    padding: '0.25rem',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '4rem',
    img: {
        objectFit: 'cover',
    }

})
