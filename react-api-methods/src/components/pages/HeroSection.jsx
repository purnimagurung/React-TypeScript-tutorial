import OrderSteps from "../home/OrderSteps";
import PizzaGirl from "../../assets/images/pizza-girl.png";
import FaddedGirl from "../../assets/images/faded-girl.png";

const HeroSection = () =>{ 
        const heroTitle = "Order Restaurant food, takeaway and groceries.";

    return (
        <section className="bg-[#030B1C] text-white px-6 md:px-16 py-12 relative overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 z-20">
                <p className="text-sm text-gray-300 mb-2"> {heroTitle} </p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Feast Your Senses,<br />
                <span className="text-orange-500">Fast and Fresh</span>
                </h2>
                <p className="text-sm text-gray-300 mb-6">Enter a postcode to see what we deliver</p>
                <div className="flex rounded-full overflow-hidden max-w-md bg-white">
                <input
                    type="text"
                    placeholder="e.g. EC4R 3TE"
                    className="w-full px-4 py-3 text-black outline-none"
                />
                <button className="bg-orange-500 px-6 py-3 text-white font-semibold">Search</button>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center items-center">
                {/* Yellow background half circle */}
                <div className="absolute top-0 left-2/4 w-[600px] h-[600px] bg-orange-500 rounded-l-full z-0 hidden lg:block"></div>

                {/* Background (faded) image */}
                <img
                src={FaddedGirl}
                alt="Pizza Girl background"
                className="absolute top-16 -left-96 min-w-max h-auto"
                //   style={{ right: '5%', top: '15%' }}
                />

                {/* Foreground image */}
                <img
                src={PizzaGirl}
                alt="Pizza Girl"
                className="w-full right-48 max-w-sm top-12 z-10 relative"
                />

                {/* Steps component */}
                <OrderSteps />
            </div>
            </div>
        </section>
    ) };

export default HeroSection;
