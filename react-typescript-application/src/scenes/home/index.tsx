import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage : (value:SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section 
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pd-0"
    >
      {/* IMAGE AND  MAIN HEADER */}
      <motion.div 
      className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={() =>setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x:0}
          }}
           className="md:mt-20"
           >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:left-20 before:z-[-1] before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
              <p className="mt-8 text-sm">Hi, I am Purnima Gurung, a Frontend developer with over 4 years of experience in front-end development and a master’s
                degree with a specialization in software design and development. Highly familiar with a variety
                of software development tools and techniques. Speaks Nepali natively, English fluently (C1)
                and German with basic working proficiency (A2).  </p>
          </motion.div>
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.2}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x:0}
          }}
          className="mt-8 flex items-center gap-8 md:justify-start"
          >
            {/* Action Button */}
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink 
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick = {()=> setSelectedPage(SelectedPage.ContactUs)}
            href={`#{SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end">
          {/* IMAGE */}
          <img alt="HomePageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {/* SPONSER LAYOUTS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt= "redbull-sponsor" src={SponsorRedBull} />
              <img alt= "forbes-sponsor" src={SponsorForbes} />
              <img alt= "fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Home;