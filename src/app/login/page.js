"use client";

import React, { useState } from "react";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="min-h-[70vh] flex justify-center items-center">
            <div className="flex flex-col gap-1 justify-center">
                <h1 className="text-3xl dark:text-white font-bold mb-3">Log in</h1>
                <p className="dark:text-white">email</p>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="border border-white bg-black px-3 py-2 rounded-lg text-xl dark:text-white" 
                    placeholder="tu email"
                />

                <p className="dark:text-white">password</p>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="border border-white bg-black px-3 py-2 rounded-lg text-xl dark:text-white" 
                    placeholder="tu contraseña"
                />
                <button 
                    type="submit" 
                    className="bg-white rounded-lg mt-3 py-2 text-xl" 
                    onClick={handleSubmit}
                >
                    entrar
                </button>
                <div className="flex justify-center items-center gap-2 my-3">
                    <span className="bg-white w-full h-[1px]"></span>
                    <span className="dark:text-white">or</span>
                    <span className="bg-white w-full h-[1px]"></span>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="bg-white text-center rounded-lg py-2">google</p>
                    <p className="bg-[#0766FF] text-white text-center  rounded-lg py-2 mp-3">facebook</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
