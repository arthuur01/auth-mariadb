"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";


export default function RegisterUser(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    
    const handleSignup = async () => {
        const {data, error} = await authClient.signUp.email({
        email,
        password,
        name,
        callbackURL: "/dashboard"
    },{
    onRequest: (ctx) => {

    },
    onSuccess: (ctx) => {

    },
    onError: (ctx) => {
        alert(ctx.error.message);
    },
})}
    


    return(
        <div>
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome"/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha(minímo 8 digítos)"/>
                <button onClick={handleSignup}>Cadastrar</button>
            </form>
        </div>
    )
}



