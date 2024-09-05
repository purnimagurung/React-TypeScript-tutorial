import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";

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
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

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
            {isAboveMediumScreens ? (
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
                <div className={`${FlexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-5 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {/* inner-left-side */}
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
