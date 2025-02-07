import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function Footer() {
    return (
<div>
<div  className=" border border-neutral-600 my-4   w-full"> </div>
<div className="grid place-items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
        >
            <div className="mb-2" >
                <h1>
                    Resources
                </h1>
                {
                    resourcesLinks.map((item, index) => (
                        <div className="text-neutral-500 text-sm my-2 hover:text-neutral-400 duration-300" key={index}>
                            <a href={item.href}>
                                {item.text}</a>
                        </div>
                    ))
                }
            </div>
            <div className="mb-2" >
                <h1>
                Platform
                </h1>
                {
                    platformLinks.map((item, index) => (
                        <div className="text-neutral-500 text-sm my-2 hover:text-neutral-400 duration-300" key={index}>
                            <a href={item.href}>
                                {item.text}</a>
                        </div>
                    ))
                }
            </div>        <div className="mb-2" >
                <h1>
                Community
                </h1>
                {
                    communityLinks.map((item, index) => (
                        <div className="text-neutral-500 text-sm my-2 hover:text-neutral-400 duration-300" key={index}>
                            <a href={item.href}>
                                {item.text}</a>
                        </div>
                    ))
                }
            </div>
        </div>
</div>
        
    )
}

export default Footer