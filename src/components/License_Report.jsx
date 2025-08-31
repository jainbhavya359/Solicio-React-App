import React, { useState, useEffect, use} from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function License_Report(){

    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(true);
    const [ reload, setReloading ] = useState(false);
    const { user, isAuthenticated } = useAuth0();

    const fetchData = async ()=> {
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/getlicenses`);
            if(!response.ok){
                throw new Error("Network Issue");
            }else{
                const d = await response.json();
                setData(d);
            }
        }catch(err){
            console.log(err);
            setError(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();

        window.scrollTo(0, 0);
    },[]);

    useEffect(()=>{
        fetchData();
    },[reload]);

    const onHandleClick = (id) => {
        const DeleteItem = async () => {
            try{
                await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/deletelicense/${id}`, {
                    method: "DELETE",
                });
                setReloading(true);
            }catch (err){
                console.log("Error Occured", err);
            }
        }

        DeleteItem();
    }

    console.log(data);

    return(
        <>
            <div className="flex flex-col justify-start gap-4 rounded-xl shadow-lg p-6 m-5 mt-10 pt-10 bg-white border border-gray-100">
            <h2 className="text-2xl font-bold border-b pb-3 pt-3 text-indigo-600">
                Your Licenses
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
                        <th className="py-3 px-6 text-left">License Name</th>
                        <th className="py-3 px-6 text-left">Issuing Authority</th>
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-left">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((lic, index) => (
                        (lic.email == user.email ? <tr
                        key={lic.id}
                        className={`${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-indigo-50 transition`}
                        >
                        <td className="py-3 px-6">{lic.license_name}</td>
                        <td className="py-3 px-6">{lic.authority}</td>
                        <td className="py-3 px-6 text-gray-600">{new Date(lic.date).toISOString().split('T')[0]}</td>
                        <td className="py-2 px-4 border">
                            <button
                            onClick={() => onHandleClick(lic.id)}
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
                <p className="text-gray-500">No licenses found.</p>
            )}
            </div>
        </>
    );
}