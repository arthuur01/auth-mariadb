import Header from "@/components/header";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Home Page",
  description: "Página Inicial",
};


export default function Home() {
  return (
   <div>
    <Header/>
   </div>
  );
}
