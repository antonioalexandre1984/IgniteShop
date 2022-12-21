import Link from "next/link";
import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    gap: '3rem',
    width: '100%',
    maxWidth: '1180px',
    margin: '0 auto',
    minHeight: '656px',
    marginLeft: 'auto',
    //maxWidth: 'calc(100vw -(100vw - 1180px)/2))',
});

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '8px',
    padding: '0.25rem',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',
        borderRadius: '6px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$sm',
            color: '$gray3'
        },

        span: {
            fontSize: '$xs',
            fontWeight: 'bold',
            color: '$green-light'
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
});