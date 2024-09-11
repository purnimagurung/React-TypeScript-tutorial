/* Entry of different pages of the application */

import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Portfolios from "./scenes/portfolio";
import OurClasses from "./scenes/class";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  /* for top scroll bar  */
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect (()=> {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="app bg-gray-20"> 
        <Navbar 
         isTopOfPage = {isTopOfPage}
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}
         />
         <Home setSelectedPage={setSelectedPage} />
         <Portfolios setSelectedPage={setSelectedPage} />
         <OurClasses setSelectedPage={setSelectedPage} />
         <ContactUs setSelectedPage = {setSelectedPage} />
         <Footer/>
      </div>
     
    </>
  );
}

export default App;
