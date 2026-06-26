import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import { RowDataPacket } from "mysql2";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
    const {password,email} = await request.json();

    if(!password || !email){
        return NextResponse.json(
            {error:'Campos em branco'}, 
            {status: 400});
    }

    if(password.length < 6){
        return NextResponse.json(
            {error: 'Senha inválida'}, 
            {status: 400});
    }

    const [users] = await pool.query<RowDataPacket[]>(
        'SELECT id , email, name, password FROM users WHERE email = ?', 
        [email]
    );

    if(users.length == 0){
        return NextResponse.json(
            {error: 'Email inválido'}, 
            {status:401});
    }
    const user = users[0];

    const verifyMatch = await bcrypt.compare(password, user.password);
    if(!verifyMatch){
        return NextResponse.json(
            {error: 'Email ou senha inválidos'}, 
            {status: 401});
    }
    return NextResponse.json(
        {message: 'Login Efetuado com sucesso',
         user: {
            id: user.id,
            email: user.email,
            name: user.name,
         }
        }, 
        {status: 200}
    );

    } catch (error) {
        console.log('Error interno ao logar', error);
        return NextResponse.json(
            {error:'Erro interno ao logar'}, 
            {status: 500});
    }
}
