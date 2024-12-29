"use client"

import Link from "next/link"
import Button from "../Button"

interface BackButtonProps{
    
    href: string
    label: string
}
export const BackButton =({href, label} : BackButtonProps) =>{
    return (
        <Button isloading= {false} variant='ghost' className="font-normal w-full">
            <Link href={href}>{label}</Link>
        </Button>
    )
}