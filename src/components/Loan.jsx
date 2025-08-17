import React from "react";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Services } from "./Services";


export default function Loan (){
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");

    useEffect(() =>{
        window.scrollTo(0,0);
    }, []);

    useEffect(() => {
        if(!isAuthenticated){
            loginWithRedirect();
        }else{
            setName(user.name);
            setEmail(user.email);
        }
    }, [isAuthenticated, user, loginWithRedirect]);

    const [ loanName , setLoanName ] = useState("");
    const [ lender, setLender ] = useState("");
    const [ amount, setAmount ] = useState(0);
    const [ panNum, setPanNum ] = useState("");
    const [ date, setDate ] = useState("");

    const [ paymentHistory, setPaymentHistory ] = useState(95);
    const [ ratio, setRatio ] = useState(30);
    const [ year, setYear ] = useState(0);
    const [ inquiries, setInquiries] = useState(0);
    const [ credit, setCredit ] = useState(0);
    const [ index, setIndex ] = useState(0);

    const [ show, setShow] = useState(false);

    const handleChange = async(event) => {
        event.preventDefault();

        if(isAuthenticated){
            
        }
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/loan`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({loanName, lender, amount, panNum, date, name, email})
            });

            if (response.ok) {
                setLoanName("");
                setAmount(0);
                setLender("");
                setPanNum("");
                setDate("");
            } else {
                alert('Failed to send message');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Error occurred');
        }
    }

    const scores_rate = [
        "Poor 🚨   High risk : difficult to get loans or credit cards. If approved, interest rates will be very high.",
        "Fair ⚠️   Below average : lenders may approve but with strict terms, collateral, or higher interest rates.",
        "Good 🙂   Acceptable score : you may get loans, though not always the best terms.",
        "Very Good ✅   Safe range : most banks/NBFCs will offer loans & cards with decent interest rates.",
        "Excellent 🌟   Top-tier credit profile : easy approvals, higher limits, and lowest interest rates."
    ];

    const calculateScore = () => {
        setCredit(((35 * paymentHistory) + (30 * ratio) + (15 * year) + (10 * inquiries))*0.1);

        

        if(credit <= 549){
            setIndex(0);
        }else if(credit > 549 && credit <= 649){
            setIndex(1);
        }else if(credit > 649 && credit <= 699){
            setIndex(2);
        }else if(credit > 699 && credit <= 749){
            setIndex(3);
        }else if(credit > 749 && credit <= 900){
            setIndex(4);
        }

        setShow(true);
    }

    return (
        <div className="m-2 pt-9 mt-7">

            <div className="flex flex-col justify-start gap-4 rounded-xl shadow-md p-5 m-5 bg-gray-50">
                <h2 className="text-2xl font-bold border-b-2 pb-3 text-indigo-500">Credit Score Simulator</h2>
                <div>
                    <p>
                        This tool is a simplified simulator to help you understand the major factors that contribute to a business credit score. Input your data and see a simulated score and what it means.
                    </p>
                    <em className="text-gray-500 text-sm">Note: This is not a real credit score calculation and should be used for educational purposes only.</em>
                </div>
                
                <div className="grid grid-cols-2 grid-rows-2">
                    <div className="flex flex-col justify-start m-3">
                        <label>Payment History (%)</label>
                        <input type="number" className="border border-gray-300 rounded w-5/6 pl-3 pr-10 py-2 focus:outline-none" min="0" max="100" value="95" />
                        <p className="text-gray-500 text-sm">Percentage of on-time payments (e.g., 95 for 95%).</p>
                    </div>
                    
                    <div className="flex flex-col justify-start m-3">
                        <label>Credit Utilization Ratio (%)</label>
                        <input type="number" className="border border-gray-300 rounded w-5/6 pl-3 pr-10 py-2 focus:outline-none" min="0" max="100" value="30" />
                        <p className="text-gray-500 text-sm">Percentage of available credit used (ideally below 30%).</p>
                    </div>

                    <div className="flex flex-col justify-start m-3">
                        <label>Years of Credit History</label>
                        <input type="number" className="border border-gray-300 rounded w-5/6 pl-3 pr-10 py-2 focus:outline-none" min="0" value="5" />
                        <p className="text-gray-500 text-sm">The age of your oldest credit account in years.</p>
                    </div>

                    <div className="flex flex-col justify-start m-3">
                        <label>Recent Credit Inquiries</label>
                        <input type="number" className="border border-gray-300 rounded w-5/6 pl-3 pr-10 py-2 focus:outline-none" min="0" value="2" />
                        <p className="text-gray-500 text-sm">Number of times you have recently applied for new credit.</p>
                    </div>
                </div>

                <button onClick={calculateScore} className="bg-indigo-200 w-1/6 rounded-3xl p-2 shadow-md shadow-indigo-100 transition delay-100 duration-200 hover:-translate-y-1 hover:scale-105">Calculate Score</button>
                
                <div className={show ? "block rounded-xl shadow-[inset_0_4px_6px_rgba(0,0,0,0.09)] p-5" : "hidden rounded-xl shadow-[inset_0_4px_6px_rgba(0,0,0,0.09)] p-5"}>
                    <h3>Simulated Credit Score: <span id="scoreValue">{credit}</span></h3>
                    <p >{scores_rate[index]}</p>
                </div>
                <div></div>
            </div>

            <div className="flex flex-col justify-start gap-4 rounded-xl shadow-md p-5 m-5 bg-gray-50">
                <h2 className="text-teal-600 text-2xl font-bold border-b-2 pb-3">My Loan Statements</h2>
                <p>
                    Keep all your loan information in one place. Add new loans to your list to easily track and manage your financial obligations.
                </p>
                
                <div className="grid grid-cols-2 grid-rows-2">
                    <div className="flex flex-col justify-start m-3">
                        <label>Loan Name</label>
                        <input type="text" onChange={(e) => setLoanName(e.target.value)} className="border border-gray-300 rounded w-5/6 pl-3 pr-10 py-2 focus:outline-none" placeholder="e.g., Working Capital Loan" />
                    </div>
                    <div className="flex flex-col justify-start m-3">
                        <label>Lender</label>
                        <input type="text" onChange={(e) => setLender(e.target.value)} className="border border-gray-300 rounded w-5/6 pl-3 pr-10 py-2 focus:outline-none" placeholder="e.g., State Bank of India" />
                    </div>
                    <div className="flex flex-col justify-start m-3">
                        <label>Amount (₹)</label>
                        <input type="number" onChange={(e) => setAmount(e.target.value)} className="border border-gray-300 rounded w-5/6 pl-3 pr-10 py-2 focus:outline-none" placeholder="e.g., 500000" />
                    </div>
                    <div className="flex flex-col justify-start m-3">
                        <label>Pan Number</label>
                        <input type="text" onChange={(e) => setPanNum(e.target.value)} className="border border-gray-300 rounded w-5/6 pl-3 pr-10 py-2 focus:outline-none" placeholder="e.g., ABCDE1234F" />
                    </div>
                    <div className="flex flex-col justify-start m-3">
                        <label>Start Date</label>
                        <input type="date" onChange={(e) => setDate(e.target.value)} className="border border-gray-300 rounded w-5/6 pl-3 pr-10 py-2 focus:outline-none" />
                    </div>
                </div>
                <button onClick={handleChange} className="bg-emerald-200 w-1/6 rounded-3xl p-2 shadow-md shadow-emerald-100 transition delay-100 duration-200 hover:-translate-y-1 hover:scale-105">Add Loan</button>

                <div id="loanList" className="loan-list">
                </div>
            </div>

            <div className="rounded-xl shadow-[inset_0_4px_6px_rgba(0,0,0,0.09)] p-5 m-5 bg-gray-50">
                <h2 class="font-bold text-2xl border-b-2 text-teal-600 mb-4">Affordable Loan Finder</h2>
                <p class="section-description">Explore these government schemes and trusted organizations that provide loans with affordable interest rates for MSMEs.</p>

                <div class="list-container">
                    <div className="flex flex-col justify-start gap-4 rounded-xl shadow-md p-8 m-4">
                        <h3 className="text-xl font-bold">Pradhan Mantri Mudra Yojana (PMMY)</h3>
                        <p class="list-description">
                            Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro-enterprises. The scheme has three categories: Shishu (up to ₹50k), Kishore (₹50k-₹5 lakh), and Tarun (₹5 lakh-₹10 lakh).
                        </p>
                        <a href="https://www.mudra.org.in/" target="_blank" className="text-purple-800">
                            Official Website →
                        </a>
                    </div>

                    <div className="flex flex-col justify-start gap-4 rounded-xl shadow-md p-8 m-4">
                        <h3 className="text-xl font-bold">Credit Guarantee Fund Trust for Micro &amp; Small Enterprises (CGTMSE)</h3>
                        <p class="list-description">
                            Offers collateral-free loans up to ₹2 crore. It provides a guarantee cover to the lending institutions, making it easier for MSMEs to secure funding without third-party guarantees.
                        </p>
                        <a href="https://www.cgtmse.in/" target="_blank" className="text-purple-800">
                            Official Website →
                        </a>
                    </div>

                    <div className="flex flex-col justify-start gap-4 rounded-xl shadow-md p-8 m-4">
                        <h3 className="text-xl font-bold">SIDBI (Small Industries Development Bank of India)</h3>
                        <p class="list-description">
                            A major financial institution dedicated to MSME development. SIDBI offers a wide range of loans for modernization, expansion, and working capital under various schemes.
                        </p>
                        <a href="https://www.sidbi.in/" target="_blank" className="text-purple-800">
                            Official Website →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}