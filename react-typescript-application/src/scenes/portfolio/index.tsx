import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { PortfolioType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import Htext from "../../shared/Htext";
import Portfolio from "./portfolio";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGrapghic from "@/assets/BenefitsPageGraphic.png"

const portfolios: Array<PortfolioType> =[
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Akashi Japanese Language School" , 
    description:
    "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality."

  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Japanese Language Testing Center" , 
    description:
    "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality."

  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Kathmandu Steel Company" , 
    description:
    "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality."

  },
];

// animation  
const container = {
  hidden:{},
  visible: {
    transition: {staggerChildern : 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Portfolios = ({ setSelectedPage }: Props) => {
  return (
    <section id="portofilo" className="mx-auto min0h-full w-5/6 py-20">
      <motion.div 
      onViewportEnter={() =>setSelectedPage(SelectedPage.Portfolio)}>
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x:0}
          }} className="md:my-5 md:w-3/5">
          <Htext>My Portfolio</Htext>
          <p className="my-5 text-sm">I help creative entrepreneurs build better businesses, maximize productivity, and cultivate an engaged community.</p>
        </motion.div>

        {/* Portfolio lists  */}
        <motion.div className="md:flex items-center justify-between gap-8 mt-5"
        initial= "hidden"
        whileInView="visible"
        viewport={{once:true, amount : 0.5}}
        variants={container}
        >
           {portfolios.map((portofilo)=>(
            <Portfolio 
            key = {portofilo.title}
            icon = { portofilo.icon}
            title = { portofilo.title}
            description = { portofilo.description}
            setSelectedPage = {setSelectedPage}
            />

          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 text-center justify-between gap-20 md:mt-28 md:flex">
          {/* IMAGE */}
          <img src={BenefitsPageGrapghic} alt="page-grapgic" />
          <div>
            {/* DESCRIPTION */}
            <div>
              {/*  TITLE*/}
              <div className="relative">
                <div className="before:absolute before: -top-20 before:-left-20 before:z-1 before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true, amount:0.5}}
                  transition={{duration:0.5}}
                  variants={{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x:0}
                  }}
                  >
                    <Htext>
                      MILLIONS of Happy Member Geetting {""}
                      <span className="text-primary-500">FIT</span>
                    </Htext>
                  </motion.div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true, amount:0.5}}
                  transition={{delay:0.5}}
                  variants={{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x:0}
                  }}
              >
                <p className="my-5">
                  ree resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.
                </p>
                <p className="mb-5">ree resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
              </motion.div>

              {/* BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles" >
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolios;
