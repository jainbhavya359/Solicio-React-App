import React from "react";
import { Services } from "./Services";
import { useEffect } from "react";

export function Business(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="flex flex-col justify-start gap-3 m-3 shadow-md p-5 rounded-xl mt-9">
                <h2 className="text-xl font-bold mt-9"> What is ERP?</h2>
                <p>ERP (Enterprise Resource Planning) software helps MSMEs integrate functions like inventory, HR, sales, and finance into a unified system. Popular tools include SAP, Tally, Zoho Books, and Microsoft Dynamics.</p>

                <h2 className="text-xl font-bold"> What is CRM?</h2>
                <p>CRM (Customer Relationship Management) systems help manage customer interactions, sales pipelines, and marketing. Common CRMs include Zoho CRM, HubSpot, and Salesforce.</p>
            </section>

            <div className="m-3 shadow-md p-5 rounded-xl">
                <h2 className="text-purple-700 text-xl font-bold">Ask a Question</h2>
                <p>
                    Have a specific question about business? Ask me anything and get an instant answer.
                </p>
                <div className="flex justify-start">
                    <input
                        type="text"
                        placeholder="e.g., Where to find business partners?"
                        className="border border-gray-300 rounded w-2/3 pl-3 pr-10 py-2 focus:outline-none"
                    />
                    <button className="pl-3 text-gray-500 hover:text-gray-700">
                        🔍
                    </button>
                </div>

                <div>
                    <div></div>
                </div>
                <div></div>
            </div>

            <section className="m-2 p-7 rounded-xl shadow-md flex flex-col justify-start gap-8">
                <h2 className="text-3xl font-bold"> Government Upskilling Courses</h2>

                <h3 className="text-xl font-bold">🔗 Skill India Digital</h3>
                <iframe src="https://www.skillindiadigital.gov.in/" loading="lazy" className="w-full h-[40rem]"></iframe>

                <p class="note">If the page does not load, right-click and open it in a new tab due to embedding restrictions.</p>
            </section>

            <div className="flex flex-col justify-start rounded-xl shadow-[inset_0_4px_6px_rgba(0,0,0,0.09)] p-7 m-2 mt-8 gap-4">
                <h2 className="font-bold text-2xl text-teal-600">Some Business Related Courses</h2>
                <p>Explore these courses which help you in taking your business to great heights</p>

                <div >
                    <div className="flex flex-col justify-start rounded-xl shadow-md p-7 m-2 gap-4">
                        <h3 className="font-semibold text-lg">Business Management and Leadership</h3>
                        <p>
                            How To Become A Star Manager, And A Successful Leader.    
                        </p>
                        <a href="https://www.udemy.com/course/management-business-management-leadership/?couponCode=KEEPLEARNING" target="_blank" className="text-purple-800">
                            Official Website →
                        </a>
                    </div>

                    <div className="flex flex-col justify-start rounded-xl shadow-md p-7 m-2 gap-4">
                        <h3 className="font-semibold text-lg">Business Analytics Complete Course</h3>
                        <p>
                            Learn Business Analytics with Excel, SQL, Tableau, and Power BI.
                        </p>
                        <a href="https://www.udemy.com/course/business-analytics-complete-course-w/?couponCode=KEEPLEARNING" target="_blank" className="text-purple-800">
                            Official Website →
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}