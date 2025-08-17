import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard ({ to, svg, heading, description }){
    return (
        <Link to={to} className="service-card transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center items-center">
                <div className="">
                    {svg}
                </div>
                <div className="font-bold">
                    {heading}
                </div>
            </div>
            {description}
        </Link>
    );
}