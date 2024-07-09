import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { SlMagnifier } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";


const Header = () => {
    return (
        <div className='header'>
            <Link href='/'>   
            <Image src="/logo.png" width={102} height={34} />  
            </Link>

            <div className='icons'>
                <Link href='#'><SlMagnifier /></Link>
                <Link href='#'><CgProfile /></Link>
                <Link href='/cart'><IoCartOutline  /></Link>
            </div>
            <section className='banner'>
            
            </section>
        </div>
        
    )
};