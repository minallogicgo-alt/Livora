"use client"
import Image from "next/image";
import Link from "next/link"
import phoneCall from "@/public/phone-call.svg";
import { useState ,useEffect} from "react";
type NavLink={
    label:string;
    href:string;
}
export default function Navbar (){
    const [mobileMenuOpen,setMobileOpen]=useState(false);
    const[isFixed,setIsFixed]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>setIsFixed(window.scrollY>50);
        window.addEventListener("scroll",handleScroll);
        return ()=>window.removeEventListener("scroll",handleScroll);

        
    },[]);
    return (
        <div className={`w-full transition-all py-5 duration-500 fixed top-0 left-0 z-50 fixed-nav ${isFixed ? "bg-black" : "bg-transparent"}`}>
            <div className={`w-full flex items-center justify-between transition-all duration-500 ${isFixed ?"px-[8%] lg:px-[16%]":"px-[8%] lg:px-[16%]" }`}>
                {/* Desktop Logo */}
               <Link href="/" 
               className={`text-4xl lg:text-5xl font-bold Audiowide text-white` } >
                
                Liv <span className="text-[var(--prim-dark)]">
                    ora
                </span>
               </Link>

            </div>
            
        </div>
    )
}