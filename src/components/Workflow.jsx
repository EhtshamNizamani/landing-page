import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

function Workflow() {
    return (
        <section id="workflow">
            <div className="mt-20 text-center text-5xl">
                <h1>Acelerate your coding workflow</h1>
            </div>
            <div className=" mt-6 md:flex lg:mt-20">
                <div className="  w-full rounded-sm ">
                    <img  src={codeImg} alt="Code img" />
                </div>
                <div className="flex justify-start items-start flex-col mt-5  w-full">

                    {checklistItems.map((item, index) => (
                            <div key={index}  className="flex justify-start items-start  my-8">
                                <div className="text-green-500 mr-3 ">
                                    <CheckCircle2 />
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <div className="text-white text-2xl ">
                                        {item.title}
                                    </div>
                                    <div className="text-neutral-500  ">
                                        <p>

                                            {item.description}
                                        </p>

                                    </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Workflow