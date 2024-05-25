import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backendRequest from "../helpers/backendRequest";


function Settings(){

    const navigate = useNavigate();

    const [errorArr, setErrorArr] = useState([]);


    async function handleSubmit(e){
        e.preventDefault();
        try{
            const res = await backendRequest(
                `users/${sessionStorage.getItem("username")}`, {}, "delete"
            );
            sessionStorage.clear()
            navigate("/");
        } catch(error) {
            setErrorArr([error])
        }
    }

    function renderErrorHtml(){
        return errorArr.map((err, index) => (
            <div key={index} className="text-red-600">{err}</div>
        ));
    }


    return(
        <div className="flex justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-sky-600 w-[32rem] h-[27rem] mt-32 rounded shadow gap-4 flex-col flex justify-center items-center">
                <span className="text-5xl text-stone-900 bg-sky-400 p-4 rounded shadow mb-10">
                    Settings!
                </span>
              
                <div className="bg-sky-400 p-3 rounded shadow flex flex-col justify-center items-center">
                    <span className="">Would you like to delete your account?</span>
                    <button type="submit" className="px-4 py-1 mt-2 text-stone-800 shadow inline-flex items-center bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded text-center">Delete</button>   
                </div>
                {renderErrorHtml()}
            </form>
        </div>
    )
}

export default Settings;