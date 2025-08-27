import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Profile() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [data , setData] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [error , setError ] = useState(null);
    const [ reload, setReloading ] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(isAuthenticated){
            const fetchData = async () =>{
                try{
                    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/getLoan`)
                    if(!res.ok){
                        throw new Error("Network issue");
                    }else{
                        const json = await res.json();
                        setData(json);
                    }

                }catch(error){
                    console.error(error.message);
                    setError(error.message);
                }finally{
                    setLoading(false);
                }
            }
            fetchData();

            window.scrollTo(0,0);
        }else{
            loginWithRedirect({
                appState: { returnTo: location.pathname }
            });
        }

        setReloading(false);
    }, [isAuthenticated, reload]);

    console.log(data);

    const onHandleClick = (id) => {
        const DeleteItem = async () => {
            try{
                await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/deleteLoans/${id}`, {
                    method: "DELETE",
                });
                setReloading(true);
            }catch (err){
                console.log("Error Occured", err);
            }
        }

        DeleteItem();
    }

    return (
        <>

            {/* Loan Section */}
            <div className="flex flex-col justify-start gap-4 rounded-xl shadow-lg p-6 m-5 mt-10 pt-10 bg-white border border-gray-100">
            <h2 className="text-2xl font-bold border-b pb-3 pt-3 text-indigo-600">
                Your Loans
            </h2>

            {loading ? (
                <div className="flex justify-center items-center py-10">
                <div className="w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : error ? (
                <p className="text-red-500 font-medium">Error: {error}</p>
            ) : data && data.length > 0 ? (
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
                    <thead className="bg-indigo-500 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">Loan</th>
                        <th className="py-3 px-6 text-left">Bank</th>
                        <th className="py-3 px-6 text-left">Amount (₹)</th>
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-left">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((loan, index) => (
                        (loan.email == user.email ? <tr
                        key={loan.id}
                        className={`${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-indigo-50 transition`}
                        >
                        <td className="py-3 px-6">{loan.loan}</td>
                        <td className="py-3 px-6">{loan.lender}</td>
                        <td className="py-3 px-6 font-medium text-gray-800">
                            ₹{loan.amount.toLocaleString()}
                        </td>
                        <td className="py-3 px-6 text-gray-600">{new Date(loan.date).toISOString().split('T')[0]}</td>
                        <td className="py-2 px-4 border">
                            <button
                            onClick={() => onHandleClick(loan.id)}
                            className="bg-white text-red-500 px-3 py-1 rounded-2xl border border-red-500 hover:bg-gray-50"
                            >
                            Remove
                            </button>
                        </td>
                        </tr> : null)
                    ))}
                    </tbody>
                </table>
                </div>
            ) : (
                <p className="text-gray-500">No loans found.</p>
            )}
            </div>
        </>
        );

}