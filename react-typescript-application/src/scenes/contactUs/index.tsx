import { motion } from "framer-motion";
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import Htext from "../../shared/Htext";
import { SelectedPage } from "../../shared/types";



type Props = {
    setSelectedPage : (value:SelectedPage)=> void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyle= `w-full rounded-lg bg-primary-300 px-5 mb-5 py-3 placeholder-white`;

    const {
        register, 
        trigger, 
        formState:{errors}
    } = useForm();

    /* form submit */
const onSubmit = async(e: any) => {
    const isValid = await trigger();
    if(!isValid) {
        e.preventDefault();
    }

}
    
  return (
    <section id= "contactus"
    className="mx-auto w-5/6 pt-24 pb-34">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div
            className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x:0}
          }}
            >
            <Htext>
               <span className="text-primary-500"> Join Now</span> To get in shape
            </Htext>
            <p className="my-5">Hi, I am Purnima Gurung, a Frontend developer with over 4 years of experience in front-end development and a master’s
                degree with a specialization in software design and development. Highly familiar with a variety
                of software development tools and techniques. Speaks Nepali natively, English fluently (C1)
                and German with basic working proficiency</p>
            </motion.div>
            {/* Form  */}
            <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
             className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden: {opacity: 0, y: -50},
                visible: {opacity: 1, y:0}
            }}
            >
                <form
                   target="_blank"
                   onSubmit= {onSubmit}
                   action="https://formsubmit.co/grg.puru@gmail.com"
                   method= "POST"
                >
                    <input className={inputStyle} 
                    type=" text" 
                    placeholder="NAME"
                    {...register("name", {
                        required:true,
                        maxLength: 100,
                    })}
                    />
                    {errors.name && (
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max Length  is 100 char."}
                        </p>
                    )}

                    <input className={inputStyle} 
                    type=" text" 
                    placeholder="EMAIL"
                    {...register("email", {
                        required:true,
                        pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                    })}
                    />
                    {errors.email && (
                        <p className="mt-1 text-primary-500">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address"}
                        </p>
                    )}

                    <textarea className={inputStyle} 
                    placeholder="MESSAGE"
                    rows={5}
                    cols={50}
                    {...register("message", {
                        required:true,
                        maxLength:2000,
                    })}
                    />
                    {errors.message && (
                        <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max Length  is 2000 char."}
                        </p>
                    )}

                    <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                        submit
                    </button>
                </form>
            </motion.div>
            <motion.div 
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay: 0.2, duration:0.5}}
            variants={{
                hidden: {opacity: 0, y: -50},
                visible: {opacity: 1, y:0}
            }}>
                <div className=" w-full md:before:content-evolvetext w-full before:absolute before:bottom-20 before:right-10 before:z-[-1]">
                    <img className="w-full" alt="contactus" src={ContactUsPageGraphic} />
                </div>

            </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs