import React, { use, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function StockReport (){
    const { user, isAuthenticated, loginWithRedirect} = useAuth0();
    
    useEffect(()=>{
        if(!isAuthenticated){
            loginWithRedirect();
        }

    },[]);
    
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState([]); 

    const fetchStock = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/getstock`);
            if(!response.ok){
                throw new error("Network Error");
            }else{
                const json = response.json();
                setData(json);
            }
        }catch(err){
            setError(true);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchStock();
    },[]);

    return (
        <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-emerald-600 border-b pb-4 mb-6">
                Current Stock Report
            </h2>
            <div id="stock-report" className="text-gray-500">
                {loading ? <p>Loading..</p> :
                    error ? <p>Error Occured</p> :
                    !data.length ? <p>Add Stock to see it in your Inventory</p> :
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
                            <thead className="bg-indigo-500 text-white">
                            <tr>
                                <th className="py-3 px-6 text-left">Product Name</th>
                                <th className="py-3 px-6 text-left">Quantity</th>
                                <th className="py-3 px-6 text-left">Price (₹)</th>
                                <th className="py-3 px-6 text-left">Date</th>
                                <th className="py-3 px-6 text-left">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((stock, index) => (
                                (stock.email == user.email ? <tr
                                key={stock.id}
                                className={`${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                } hover:bg-indigo-50 transition`}
                                >
                                <td className="py-3 px-6">{stock.product_name}</td>
                                <td className="py-3 px-6">{stock.quantity}</td>
                                <td className="py-3 px-6 font-medium text-gray-800">
                                    ₹{stock.price.toLocaleString()}
                                </td>
                                <td className="py-3 px-6 text-gray-600">{stock.date}</td>
                                <td className="py-2 px-4 border">
                                    <button
                                    onClick={() => onHandleClick(stock.id)}
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
                }
            </div>
        </section>
    );
}