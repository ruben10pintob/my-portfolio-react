import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/assets/logo.svg'

export const Logo = () => {
    return (
        <Link
            href='/'
        >
            <Image src={logo} width={155} height={155} priority alt=''/>
        </Link>
    )
}