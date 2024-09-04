import { useState } from "react";
import {Bars3Icon, xMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

// const[] = useState("");

type Props = {};

const Navbar = (props: Props) => {
    const FlexBetween = "flex item-center justify-between";

  return (
    <nav>
        <div className={`${FlexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${FlexBetween} mx-auto w-5/6`}>
                <div className={`${FlexBetween} w-full gap-16`}>
                    {/* left-side */}
                    <img alt="logo" src={Logo} />
                    {/* Right-side */}
                    <div className={`${FlexBetween} w-full`}>
                        {/* inner-left-side */}
                        <div className={`${FlexBetween} gap-8 text-sm`}>
                            <p>Home</p>
                            <p>Benefits</p>
                            <p>Our Classes</p>
                            <p>Contact Us</p>
                        </div>
                        {/* inner-right-side */}
                        <div className="">
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar