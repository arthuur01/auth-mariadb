import {betterAuth} from "better-auth";
import { createPool } from "mysql2/promise";


export const auth = betterAuth({
    database: createPool({
        host: "localhost",
        user: "root",
        port: 3307,
        password: "123456",
        database: "authmariadb",
    }),
    emailAndPassword:{
        enabled:true,
    }
});