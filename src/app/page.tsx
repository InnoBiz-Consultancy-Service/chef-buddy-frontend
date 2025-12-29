import Banner from "@/components/Home/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}
