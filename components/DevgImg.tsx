import Image, { StaticImageData } from "next/image"

interface Props {
    containerStyles?: String,
    imgSrc?: StaticImageData,
}

export const DevImg = ({ containerStyles, imgSrc }: Props) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} fill priority alt=""/>
        </div>
    )
}