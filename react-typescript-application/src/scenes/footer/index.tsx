import logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/3 md:mt-0">
                <img src={logo}/>
                <p>
                Hi, I am Purnima Gurung, a Frontend developer with over 4 years of experience in front-end development and a master’s
                degree with a specialization in software design and development. Highly familiar with a variety
                of software development tools and techniques. Speaks Nepali natively, English fluently (C1)
                and German with basic working proficiency
                </p>
                <p>purnima gurung copyright</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Hi, I am Purnima Gurung</p>
                <p className="my-5">Hi, I am Purnima Gurung</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact is </h4>
                <p className="my-5">Hi, I am Purnima Gurung</p>
                <p className="my-5">Hi, I am Purnima Gurung</p>
                <p>(333)456-6857</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer