"use client";
import { authClient } from "@/lib/auth-client";
import { signInAction } from "@/lib/server";
import { useState } from "react";



export default function Login(){
    
    
return(
    <form action= {signInAction}>
        <input id="email" name="email" type="email" required/>
        <input id="password" name="password" type="password" required/>
    </form>
)

}