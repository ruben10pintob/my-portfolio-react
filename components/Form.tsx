'use client'

import { User, MailIcon, ArrowRightIcon, MessageSquare, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useEffect } from "react";

export const Form = () => {
    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');
    const [ disabled, setDisabled ] = useState<boolean>(true);

    useEffect(() => {
        name !== '' && email !== '' && message !== '' ? setDisabled(false) : setDisabled(true);
    })

    
    return (
        <form action="https://formsubmit.co/678f56ceb4faa60daea9f8851a1fbd24" method="POST" className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input type="name" id="name" placeholder="Name" name="Name" onChange={({ currentTarget: { value } }) => { setName(value) }}/>
                <User className="absolute right-6" size={20}/>
            </div>

            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Email" name="Email" onChange={({ currentTarget: { value } }) => { setEmail(value) }}/>
                <MailIcon className="absolute right-6" size={20}/>
            </div>

            <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here." name="Message" onChange={({ currentTarget: { value } }) => { setMessage(value) }}/>
                <MessageSquare className="absolute top-4 right-6" size={20}/>
            </div>

            <Button disabled={disabled} className="flex items-center gap-x-1 max-w-[166px]">
                Let's Talk
                <ArrowRightIcon size={20}/>
            </Button>
        </form>
    )
}