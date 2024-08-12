'use client'

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
// Hooks
import { useScrollProgress } from '@/hooks/useScrollProgress';

// Variants
const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

interface Props {
    children?: ReactNode
}

const Template = ({ children }: Props) => {
    const completion = useScrollProgress();
    return (
        <>
            <motion.main 
                variants={variants} 
                initial='hidden' 
                animate='enter'
                transition={{ type: 'linear', delay: 0.2, duration: 0.9 }}
                >
                { children }
            </motion.main>

            <span 
                style={{ transform: `translateY(${Number(completion) - 100}%)` }} 
                className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'>
            </span>
        </>
    )
}

export default Template
