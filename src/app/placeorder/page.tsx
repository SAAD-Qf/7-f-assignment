import Contact from "../Contact/page"
import Navbar from "../Navbar/page";

export default function Home() {
  return (
    <div className="'min-h-max w-screen min-w-full 
                bg-gradient-to-r from-orange-500 to-amber-400
                sm:bg-gradient-to-r sm:from-amber-600 sm:to-orange-400
                md:bg-gradient-to-r md:from-yellow-400 md:to-orange-500
                lg:bg-gradient-to-r lg:from-amber-700 lg:to-orange-300
                absolute bg-cover items-center justify-center">
                  <Navbar />
                  
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-center">
        <Contact/>
      </main>
     
    </div>
  );
}