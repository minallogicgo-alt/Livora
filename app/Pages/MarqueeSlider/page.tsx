import React from 'react'
import Image from "next/image";
import starShape from "@/public/star-shapp.png";
export default function MarqueeSlider(){
    return(
        <div className='marquee bg-white py-6 overflow-hidden'>
           <div className='marquee_text flex items-center gap-10'>

            <MarqueeItem text="Homes built for life"/>
            <MarqueeItem text="Comfort crafted for living"/>
            <MarqueeItem text="Spaces that grow with you "/>
            <MarqueeItem text="Designed for lifelong comfort"/>
            
            
            <MarqueeItem text="Homes built for life"/>
            <MarqueeItem text="Comfort crafted for living"/>
            <MarqueeItem text="Spaces that grow with you "/>
            <MarqueeItem text="Designed for lifelong comfort"/>
     
            </div> 
        </div>
    )
}


function MarqueeItem({text}:{text:string}){
        return  (
            <div className='flex items-center gap-8 whitespace-nowrap'>
             <h2 className='marquee-text text-5xl font-bold'>
                 {text}
             </h2>
             <Image src={starShape} alt="starShape" width={40} height={40}/>
            </div>
        )    
}