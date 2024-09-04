import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, 
    selectedPage, setSelectedPage }: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const handleClick = ()=> {
    setSelectedPage(lowerCasePage);
  }
  
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-300" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
