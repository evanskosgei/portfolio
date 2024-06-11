import { FaGithub, FaStackOverflow, FaDocker, FaJira} from "react-icons/fa6";
const Logos = () => {
    return (
        <div>
            <section className=" leading-6 text-slate-700 font-sans sm:py-16">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 grid grid-cols-2 gap-6 divide-green-200 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4 lg:divide-x">
                        <div className="border-b border-blue-200 py-10 px-6 lg:border-b-0">
                            <div className="flex items-center">                                
                                <FaGithub className="w-10 h-10 text-gray-500" />
                                <span className="ml-3 text-base font-medium capitalize">GitHub</span> 
                            </div>
                        </div>
                        <div className="border-b border-blue-200 py-10 px-6 lg:border-b-0">
                            <div className="flex items-center">
                                <FaStackOverflow className="w-10 h-10 text-orange-500" />
                                <span className="ml-3 text-base font-medium capitalize">Stack Overflow</span>
                            </div>
                        </div>
                        <div className="border-b border-blue-200 py-10 px-6 lg:border-b-0">
                            <div className="flex items-center">
                                <FaJira className="w-10 h-10 text-sky-500" />
                                <span className="ml-3 text-base font-medium capitalize">Jira</span>
                            </div>
                        </div>
                        <div className="border-b border-blue-200 py-10 px-6 lg:border-b-0">
                            <div className="flex items-center">
                                <FaDocker className="w-10 h-10 text-teal-700" />
                                <span className="ml-3 text-base font-medium capitalize">Docker</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Logos