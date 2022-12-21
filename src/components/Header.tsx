/* eslint-disable @next/next/no-img-element */
import Logo from '../assets/Logo.svg'
import Image from 'next/image'

export function Header() {
    return (
        <header>
            <Image src={Logo} alt='' />
        </header>
    )
}
