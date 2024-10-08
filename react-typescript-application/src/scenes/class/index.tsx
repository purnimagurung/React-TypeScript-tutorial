import { SelectedPage } from '../../shared/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import Htext from '../../shared/Htext';
import { ClassType } from 'react';
import Class from './Class';

/*  Creating ARRAY for images */
const Classes:Array<ClassType> = [
    {
        name: "Weight Training Classes",
        defaultescription: "resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process",
       image: image1,             
    },
    {
        name: "Weight fitness Classes",
        description: "resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process",
       image: image2,             
    },
    {
        name: "Weight Adventure Classes",
       image: image3,             
    },
    {
        name: "Weight Abs core Classes",
        description: "resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process",
       image: image4,             
    },
    {
        name: "Weight Yoga Classes",
       image: image5,             
    },
    {
        name: "Weight Masage Classes",
        description: "resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process",
       image: image6,             
    },
    
]




type Props = {
    setSelectedPage : (value:SelectedPage)=> void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id = "Ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
        >
             <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x:0}
            }}
            className='mx-auto w-5/6'
            >
                <div>
                    <Htext>Our Classes</Htext>
                    <p className='py-5'>
                    resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.ree resource that will help nderstand thecv designc process and 
                    improve theroi nderstand the design process andisei impro are of vquality.
                    </p>
                </div>

            </motion.div>
                {/* SIDE SCROLLING BAR */}
            <div className="mt-10 h-[353px] w-full overflow-x-auto-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {Classes.map((item: ClassType, index)=>(
                        <Class
                        key = {`${item.name} - ${index}`}
                        name = {item.name}
                        description= {item.description}
                        image = {item.image}
                         />
                    ))}

                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses