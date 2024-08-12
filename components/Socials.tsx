'use client'

import {
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill
} from 'react-icons/ri';

import Link from 'next/link';

interface Props {
    containerStyles?: String,
    iconsStyles?: String,
}

const icons = [
    { path: 'https://www.linkedin.com/in/ruben-garcia-mier/', name: <RiLinkedinFill /> },
    { path: 'https://github.com/ruben10pintob', name: <RiGithubFill /> },
]

export const Socials = ({ containerStyles, iconsStyles }: Props) => {
    return(
        <div className={`${containerStyles}`}>
            { icons.map((icon, index) => {
                const { name, path } = icon;
                return <Link rel="noopener noreferrer" target="_blank" href={path} key={index}>
                    <div className={`${iconsStyles}`}>{name}</div>
                </Link>
            }) }
        </div>
    )
}