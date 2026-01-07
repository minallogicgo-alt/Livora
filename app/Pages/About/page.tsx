import Image from "next/image";
import about1 from "@/public/About-1.jpg";
import about2 from "@/public/About-2.jpg";
import about3 from "@/public/About-3.jpg";


export default function About (){
    return (
        <div className="px-[8%] lg:px-[16%] py-20" id="about">
         <div className="flex flex-col justify- items-center ">
              <div className="w-full lg:w-2/3 text-center">
               <span className="text-lg Rethink fonr-semibold uppercase text-(--text--light)" >
          Designing spaces for living
               </span>

               <h1 className="text-5xl md:text-7xl Rethink font-semibold">
                  We craft spaces with intention and care
               </h1>
              </div>
            </div>

            <div className="mt-20 about-wrap ">
                    <div className="about-content flex flex-col lg:flex-row gap-10 jusi">

                    </div>
            </div>
              {/* <div className="mt-20 about-wrap">
               <div className="about-content flex flex-col lg:flex-row gap-10 justify-between items-center w-full">
                <div className="w-full lg:w-1/2">
                <div className="w-full lg:w-[90%]">
                <Image src={about1} alt="about" className="w-full h-full rounded-md object-cover"/>
                </div>
                </div>
               <div className="w-full lg:w-1/2 flex justify-end">
                <h1 className="text-5xl Rethink  font-semibold">
                         Transforming spaces with creative vision
                  </h1>

                  <p className="text-(--text-light) mt-5">
               Form  blends vision and detail to make every space unique and thoughtful. Our team is driven by a passion to create places where people can thrive, connect, and grow together.
                  </p>
                  <div className="w-full lg:w-[90%]">
              
                  </div>
               </div>
               
                <div className="w-full lg:w-1/2 flex justify-end">
                       <div className="w-full lg:w-[90%]">
                             <Image src={about2} alt="about" className="w-full h-full rounded-md object-cover"/>
                </div>
                </div>
                 </div>
                 </div>      */}
             
             <div className="mt-20 about-wrap">
                    <div className="about-content flex flex-col lg:flex-row gap-10  justify-between items-center w-full">
                        <div className="w-full lg:w-1/2">
                        <div className="w-full lg:w-[90%]">
                       <Image src={about1} alt="about" className="w-full h-full rounded-md object-cover"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">

                    </div>
             </div>
        </div>
        </div>
    )
}
