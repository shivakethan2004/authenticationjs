'use client'

import { Card } from "@/components/ui/card"
import { ReactNode } from "react"
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Header } from "./header"
interface CardWrapperProps{
    children: ReactNode
    headlabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial? : boolean
};
export const CardWrapper =({
    children,
    headlabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}:CardWrapperProps) =>{
return (
    <Card className="w-[400px] shadow-md " 
    >
        <CardHeader>
        <Header label={headlabel}></Header>
        </CardHeader>
        <CardContent>
        {children}
        </CardContent>
        </Card>
)
}