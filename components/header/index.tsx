import Link from "next/link";



export default function Header(){
    return(
        <div className="bg-zinc-700">
                <div className="flex justify-between">
                    <div className="flex text-center flex-col w-30 ml-5 mt-1">
                        <h1>MariaDb</h1>
                        <h1>Sistema de login</h1>
                    </div>
                    <div className="flex text-center flex-col w-30 mr-5 gap-2 mt-1">
                        <Link href="/login">Login</Link>
                        <Link href="/login">Register</Link>
                    </div>
                </div>
        </div>
    )
}