import { useState } from "react";
import { Bars3Icon, xMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";

// type ToggleMenyState = {
//     isMenuToggled: Boolean;
//     handleMenuToggle:() => void;
// }

// const[isMenuToggled, setIsMenuToggled] = useState(false);

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const FlexBetween = "flex item-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const[isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  /* Toggled function */
//   const handleMenuToggle = () => {
//     setIsMenuToggled(!isMenuToggled);
//   }

  return (
    <nav>
      <div className={`${FlexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${FlexBetween} mx-auto w-5/6`}>
          <div className={`${FlexBetween} w-full gap-16`}>
            {/* left-side */}
            <img alt="logo" src={Logo} />

            {/* Right-side */}
            {isAboveMediumScreens ? 
            (
                <div className={`${FlexBetween} w-full`}>
                {/* inner-left-side */}
                    <div className={`${FlexBetween} gap-8 text-sm`}>
                        <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link
                        page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link
                        page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    </div>
                    {/* inner-right-side */}
                    <div className="">
                        <p>Sign In</p>
                        <button>Become a Member</button>
                    </div>
                </div> 
            ): (
                <button 
                className="rounded-full bg-secondary-500 p-2" 
                onClick = {() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-5 text-white" />
                </button>
                )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
