import React, { useEffect, useState } from "react";

export const useScrollProgress = () => {
    const [ completion, setCompletion ] = useState<Number>(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeigth = document.body.scrollHeight - window.innerHeight;

            if(scrollHeigth) setCompletion(Number((currentProgress / scrollHeigth).toFixed(2)) * 100);
            
        }

        //  Event
        window.addEventListener('scroll', updateScrollCompletion);

        //Clear event
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, [])

    return completion;
}