import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Tips(){

    const [ error, setError] = useState(null);
    const [ loading, setLoading] = useState(true);
    const [ data, setData] = useState([]);

    const {isAuthenticated} = useAuth0();

    useEffect(() => {
        const fetchData = async ()=> {
            try{
                const respose = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/tips`);
                const data = await respose.json();
                setData(data);
            }catch (err){
                alert("Error Occured", err);
                setError(err);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const tips = data.length ? (data[Math.floor(Math.random() * data.length)]) : null;

    return (
        <>
            {loading ? <div className="flex justify-center items-center py-10">
                <div className="w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div> : error ? <p> error occured </p> : isAuthenticated ?
                <div className="sticky bottom-0 rounded-xl shadow-xl flex justify-center itmes-center z-40">
                    <div className="flex flex-col justify-center items-center shadow-md shadow-emerald-200/50 bg-emerald-100/50 rounded-3xl px-7 py-2 mb-9 backdrop-blur-sm">
                        <p>Did you know : {tips?.tip}</p>
                    </div>
                </div>
            : null}
        </>
    );
}