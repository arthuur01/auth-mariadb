import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest,NextResponse } from "next/server";
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export async function POST(request: NextRequest){
    try {
        const {name, email,password} = await request.json();

        if(!name || !email || !password){
            return NextResponse.json(
                {error: 'Favor não deixar nada em braco'}, 
                {status: 400});
        }
        if(password.length > 6){
            return NextResponse.json(
                {error: 'Inserir senha com pelo menos 6 dígitos'}, 
                {status: 400});
        }
        const [emailExists] = await pool.query<RowDataPacket[]>(
            'SELECT id FROM users WHERE email = ?', 
            [email]
        );
        
        if(emailExists.length > 0){
            return NextResponse.json(
                {error: 'Email já cadastrado'}, 
                {status: 409});
        }

        const hashPass = await bcrypt.hash(password,10);

        const [insertAccount] = await pool.query<ResultSetHeader>(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name,email,hashPass]);
        
        return NextResponse.json(
            {message: 'Usuário criado com sucesso', userId: insertAccount.insertId}, 
            {status: 201});


    } catch (error) {
        console.log('Error no registro:', error)
        return NextResponse.json(
            {error: "Error interno ao criar o usuário"}, 
            {status: 500});
    }
}