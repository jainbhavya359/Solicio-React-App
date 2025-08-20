import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard ({ to, svg, heading, description, direction }){
    return (
        <div className={`flex gap-6 justify-center items-center ${direction}`}>
            <Link to={to} className="service-card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <div className="flex justify-center items-center w-56">
                    <div className="">
                        {svg}
                    </div>
                    <div className="font-bold">
                        {heading}
                    </div>
                </div>
                
            </Link>
            <div className="">
                {description}
            </div>
        </div>
    );
}