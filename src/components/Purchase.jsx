import React, { useState, useEffect, use } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Purchase({newPurchase}) {
    const [ purchasePrice, setPurchasePrice ] = useState(1000);
    const [ productName, setProductName ] = useState("");
    const [ purchaseQuantity, setPurchaseQuantity ] = useState(1);

    const { user, isAuthenticated, loginWithRedirect} = useAuth0();
    useEffect(()=>{
        if(!isAuthenticated){
            loginWithRedirect();
        }
    },[]);

    const email = user.email;
    const date = new Date().toISOString().split('T')[0];

    const addStock = async () => {
        console.log("clicked");
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/stock`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email, productName, purchaseQuantity, purchasePrice, date})
            });

            if(response.ok){
                setProductName("");
                setPurchasePrice(1000);
                setPurchaseQuantity(1);
            }else{
                console.log("Can't Add Stock");
            }


        }catch(err){
            console.log("Error", err);
        }
    }

    return(
        <>
            <section
                className={`bg-white rounded-2xl shadow-lg p-8 transition-all ${
                    newPurchase ? "opacity-100" : "hidden"
                }`}
                >
                <h3 className="text-2xl font-bold text-green-600 border-b pb-4 mb-6">Record a New Purchase</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label htmlFor="bought-product-name" className="block text-gray-700 mb-2">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="bought-product-name"
                        placeholder="e.g., Steel Pipes"
                        onChange={(e)=> {setProductName(e.target.value)}}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500"
                    />
                    </div>
                    <div>
                    <label htmlFor="bought-quantity" className="block text-gray-700 mb-2">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="bought-quantity"
                        min="1"
                        defaultValue="1"
                        onChange={(e)=>{setPurchaseQuantity(e.target.value)}}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500"
                    />
                    </div>
                    <div>
                    <label htmlFor="bought-quantity" className="block text-gray-700 mb-2">
                        Price (₹)
                    </label>
                    <input
                        type="number"
                        id="bought-quantity"
                        min="0"
                        defaultValue="1000"
                        onChange={(e)=>{setPurchasePrice(e.target.value)}}
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500"
                    />
                    </div>
                </div>
                <button
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:scale-105 transition"
                    onClick={addStock}
                >
                    Add to Stock
                </button>
            </section>
        </>
    );
}