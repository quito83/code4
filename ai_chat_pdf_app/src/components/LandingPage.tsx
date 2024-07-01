import React from "react";
import { Button } from "./ui/button";

const LandingPage = () => {
    return (
        <section className="bg-[#062427]">
            <div className="container flex flex-col text-white md:flex-row items-center">
                {/* Left */}
                <div className="ml-500 flex flex-col mb-32 space-y-12 text-center md:w-1/2">
                    <h1 className="max-w-md text-4xl md:text-5xl md:leading-tight">
                        Chat wtih any PDF document
                    </h1>
                    <p className="max-w-md md:max-w-sm text-white/80 font-light leading-7">
                       From legal agreements to financial reports, Quito App brings your documents to life. You can ask questions, get summaries, find information, and more. 
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Button variant="destructive">Get started for free</Button> 
                    </div>
                    <div className="flex justify-start mt-6">
                        <img className="h-12 w-12 my-auto object-cover rounded-full ring-2 ring-green-950" src="user_1.jpeg" />
                    
                        <img className="h-12 w-12 my-auto object-cover rounded-full ring-2 ring-green-950" src="user_2.jpeg" />
                    
                        <img className="h-12 w-12 my-auto object-cover rounded-full ring-2 ring-green-950" src="user_3.jpeg" />
                    
                        <img className="h-12 w-12 my-auto object-cover rounded-full ring-2 ring-green-950" src="user_4.jpeg" />
                    </div>
                </div> 

                {/* Right */}
                <div className="md:w-1/2">
                    <img src="hero.svg" alt="" />
                </div>
            </div>
        </section>
        
    );
};

export default LandingPage;