'use client'

import { User, MailIcon, ArrowRightIcon, MessageSquare, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"

export const Form = () => {
    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');
    const [ disabled, setDisabled ] = useState<boolean>(true);
    const [ status, setStatus ] = useState<number>(0);
    const [ open, setOpen ] = useState<boolean>(false);

    useEffect(() => {
        name !== '' && email !== '' && message !== '' ? setDisabled(false) : setDisabled(true);
        status === 200 ? succesForm() : ''
    });

    function sendForm(e: any) {
        e.preventDefault();
        emailjs.sendForm('service_2pdjp2y', 'template_ovfli8o', e.target, 'z2OqSjVi0t_3Uy_se').then(res => {
            res.status === 200 ? setStatus(res.status) : ''
        })
    }

    function succesForm() {
        setName('');
        setEmail('');
        setMessage('');
        setDisabled(true);
        setStatus(0);
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    return (
        <form onSubmit={sendForm} className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input type="name" id="name" placeholder="Name" value={name} name="name" onChange={({ currentTarget: { value } }) => { setName(value) }}/>
                <User className="absolute right-6" size={20}/>
            </div>

            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Email" value={email} name="email" onChange={({ currentTarget: { value } }) => { setEmail(value) }}/>
                <MailIcon className="absolute right-6" size={20}/>
            </div>

            <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here." value={message} name="message" onChange={({ currentTarget: { value } }) => { setMessage(value) }}/>
                <MessageSquare className="absolute top-4 right-6" size={20}/>
            </div>

            <Button disabled={disabled} className="flex items-center gap-x-1 max-w-[166px]">
                Let's Talk
                <ArrowRightIcon size={20}/>
            </Button>

            <AlertDialog open={open}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="h4">Thank you for contact me</AlertDialogTitle>
                    <AlertDialogDescription>
                        We talk soon!!
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogAction onClick={closeModal}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </form>
    )
}