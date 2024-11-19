import Image from "next/image";
import Navbar from "./Navbar/page";
import cof from "../app/public/cof.jpg"

export default function Home() {
  return (
    <div className="'min-h-max w-screen min-w-full 
                bg-gradient-to-r from-orange-500 to-amber-400
                sm:bg-gradient-to-r sm:from-amber-600 sm:to-orange-400
                md:bg-gradient-to-r md:from-yellow-400 md:to-orange-500
                lg:bg-gradient-to-r lg:from-amber-700 lg:to-orange-300
                absolute bg-cover'">
                  <Navbar/>
                  <br />
   <div className='text-4xl lg:text-2xl text-center justify-center bg-gradient-to-r from-orange-500 to-amber-400 rounded-xl font-serif  px-4 py-2 shadow-2xl shadow-orange-900 animate-bounce'>
        Hi There Im Bushra Ali ...
      </div>
      
      <br />
      <br />
      <br />
      <br />
      
      {/* The Full Stack Developer */}
      <p className="text-3xl lg:text-6xl text-center justify-center bg-gradient-to-r from-orange-500 to-amber-400 shadow-2xl shadow-orange-900 rounded-xl font-serif mb-4 px-4 py-2">
        Welcome to My Coffee Shop
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      
     
      <div className=" flex justify-center mt-8 lg:ml-10">
        <Image
          width={300}
          height={300}
          src={cof}
          alt="ai"
          className="items-center justify-center border-4 border-rose-950 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
     
      <footer>
        <p className='text-black flex font-sans text-sm text-center justify-center items-end'>
                Copyright © 2024 This Website. All Rights Reserved.
        </p>
     </footer>
    </div>
  );
}
