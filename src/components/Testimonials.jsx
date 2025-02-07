import { testimonials } from "../constants";

function Testimonials() {
    return (
        <div className="lg:mt-20 mt-6">
            <div className="text-3xl md:text-5xl  text-center">
                <h2>What people are saying</h2>
            </div>

            <div className=" grid grid-cols-1 mt-8 lg:mt-20 place-items-center lg:grid-cols-3 md:grid-cols-2 ">
                {testimonials.map((item) => (
                    <div className="bg-neutral-900 m-2 p-4 rounded-sm ">
                        <p>

                            {item.text}
                        </p>
                        <div>
                            <div className=" flex mt-4 ">
                                <img className=" w-8 h-8 rounded-full border" src={item.image} alt="" />
                                <div className=" ml-3 ">
                                    <div className="text-gray-300" >
                                        <h1>
                                            {item.user}
                                        </h1>
                                    </div>
                                    <div className="text-neutral-600" >
                                        {item.company}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default Testimonials