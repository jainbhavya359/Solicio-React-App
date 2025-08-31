import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";

export default function Services(){

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    const Service_data = [
        {
            svg : <img src="https://gorgeous-gumption-a148f7.netlify.app/term.png" alt="Business Terminology" />,
            heading : <h3>Business Terminology</h3>,
            to : "/business",
            description : <p>We help you understand complex or tricky business terms, giving you the knowledge to navigate the corporate world with confidence.</p>,
        },
        {
            svg : <img src="https://gorgeous-gumption-a148f7.netlify.app/loan.png" alt="Loan &amp; Credit" />,
            heading : <h3>Loan &amp; Credit Management</h3>,
            to : "/loan",
            description : <p>Easily manage your loans, track your credit score, and discover government schemes and NGOs that offer affordable loans.</p>,
        },
        {
            svg : <img src="https://gorgeous-gumption-a148f7.netlify.app/operations.png" alt="Operations"/>,
            heading : <h3>Operations Management</h3>,
            to : "/inventory",
            description : <p>Tools to manage your business operations, including inventory, sales, and worker count, giving you a clear overview of your performance.</p>,
        },
        {
            svg : <img src="https://gorgeous-gumption-a148f7.netlify.app/wholesale.png" alt="Wholesalers"/>,
            heading : <h3>Local Wholesalers Network</h3>,
            description : <p>Connect with nearby wholesalers and suppliers. Our network makes it easy to find and source the products you need efficiently.</p>,
        },
        {
            svg : <img src="https://gorgeous-gumption-a148f7.netlify.app/market.png" alt="Marketing"/>,
            heading : <h3>Marketing Solutions</h3>,
            description : <p>Get discovered with our tailored marketing assistance, from creating digital campaigns to collaborating with influencers.</p>,
        },
        {
            svg : <img src="https://gorgeous-gumption-a148f7.netlify.app/certificate.png" alt="Licenses"/>,
            heading : <h3>Licenses &amp; Certificates</h3>,
            to : "/licenses",
            description : <p>Manage all your existing licenses and get a personalized list of required certifications based on your business type and turnover.</p>,
        },
    ];

    return(
        <section className="py-12 scroll-mt-24 pt-9 mt-9 bg-slate-50" id="target">
            <div className="flex flex-col justify-center items-center mt-6">
                <h2 className="font-bold text-2xl pb-6">Your Partner in Business Growth</h2>
                <p className="text-center w-1/2 pb-8">
                    Welcome to the platform designed to be your trusted partner for managing and growing your business. We understand the challenges you face every day, from managing finances to finding the right resources. Our goal is to simplify these complexities so you can focus on what you do best: building your dream.
                </p>
            </div>
            <h3 className="text-2xl font-bold text-center mb-8 mt-8">Our Services</h3>
            <div className="grid grid-cols-1 gap-8 px-4 max-w-5xl mx-auto text-center">
            {Service_data.map((data, index) => {
                return (<ServiceCard 
                    svg={data.svg}
                    heading={data.heading}
                    to={data?.to}
                    description={data.description}
                    direction={index%2 == 0 ? "flex-row" : "flex-row-reverse"}
                />)
            } )}
            </div>
        </section>
    );
}