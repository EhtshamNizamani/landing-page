import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

function Pricing() {
  return (
    <div className="lg:mt-20 mt-6">
        <div className="text-3xl md:text-5xl  text-center">

        <h2>Pricing</h2>
        </div>

    <div className=" lg:flex lg:mt-10 mt-6 justify-between items-center ">
       {pricingOptions.map((option,index)=>(
 <div key={index} className="mb-4 border border-neutral-500 rounded-md md:mx-4 w-full p-8 ">
    <div className=" flex justify-center items-center gap-2">
        <h1 className="text-3xl ">{option.title}</h1>
        {

        option.title === "Pro" ? (
            <span className="text-orange-500 ">(Most Popular)</span>
          ) : null
          

        }

    </div>
    <div className="flex text-3xl items-end gap-1 mt-2 ">
       <h1>
        {option.price}
        </h1> 
        <span className="text-sm text-neutral-600">/Month</span>

    </div>

    {option.features.map((feature,index)=>(
        

        <div key={index} className="flex gap-2 text-sm mt-6">
            <div>
                <CheckCircle2/>
            </div>
            <div>
                {feature}
            </div>
        </div>
    ))}
       <div className="border border-orange-500 w-full py-1 px-2 text-center mt-20 m-auto rounded-md cursor-pointer hover:border-white transition duration-500"> Subscribe</div>

 </div>
       ))}

    </div>
    </div>

  )
}

export default Pricing