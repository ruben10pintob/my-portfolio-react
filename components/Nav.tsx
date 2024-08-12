import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

//next hooks
import { usePathname } from "next/navigation";

interface Props {
    containerStyles?: String,
    linkStyles?: String,
    underlineStyles?: String
}

const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' }
]


export const Nav = ({ containerStyles, linkStyles, underlineStyles }: Props) => {
    const pathName = usePathname();
    return (
        <nav className={`${containerStyles}`} >
            { links.map((link, index) => {
                const { path, name } = link;
                return (
                    <Link 
                        href={path} 
                        key={index} 
                        className={`capitalize ${linkStyles}`}
                    > 
                        {path === pathName && (
                            <motion.span 
                                initial={{ y: '-100%'  }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {name} 
                    </Link>
                )
                    
            }) }

        </nav>
    )
}