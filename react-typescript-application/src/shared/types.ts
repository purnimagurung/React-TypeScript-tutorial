export enum SelectedPage {
    Home = "home",
    Portfolio = "portfolio",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
  }

  export interface PortfolioType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }