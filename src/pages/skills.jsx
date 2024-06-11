import { FaLaravel, FaReact, FaPython, FaAws, FaVuejs, FaFigma } from "react-icons/fa6";
const Skills = () => {
    return (
        <div>
            <section className="font-sans text-slate-700">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Professional Excellence</h2>
                        <p className="mt-4 font-sans text-gray-700">
                            Dedicated to excellence, we provide top-tier professional services that exceed client expectations every time.
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a className="block rounded-xl border border-green-500 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-500/10"
                            href="#">
                            <FaLaravel className="size-10 text-[#F05340]" />
                            <h2 className="mt-4 text-xl font-bold text-slate-700">PHP Laravel</h2>
                            <p className="mt-1 text-sm text-gray-700">
                                Crafting scalable, secure, and high-performance web applications using Laravel. Harnessing the power of PHP to deliver robust solutions tailored to your needs.
                            </p>
                        </a>

                        <a className="block rounded-xl border border-green-500 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-500/10"
                            href="#">
                            <FaReact className="size-10 text-sky-500" />
                            <h2 className="mt-4 text-xl font-bold text-slate-700">React</h2>
                            <p className="mt-1 text-sm text-gray-700">
                                Expert in developing scalable web applications with React. Proficient in optimizing performance and enhancing user interaction through modern React practices.
                            </p>
                        </a>

                        <a className="block rounded-xl border border-green-500 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                            href="#">
                            <FaPython className="size-10 text-[#0277BD] text-[#FFC107]/2" />
                            <h2 className="mt-4 text-xl font-bold text-slate-700">Python</h2>
                            <p className="mt-1 text-sm text-gray-700">
                                I design and implement software solutions that meet diverse needs. Whether
                                it&apos;s web applications, automation, or data analysis, my approach ensures
                                reliability, efficiency, and high performance.
                            </p>
                        </a>

                        <a className="block rounded-xl border border-green-500 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                            href="#">
                            <FaAws className="size-10 text-orange-800" />
                            <h2 className="mt-4 text-xl font-bold text-slate-700">Cloud Technologies</h2>
                            <p className="mt-1 text-sm text-gray-700">
                                Harnessing cloud infrastructure to optimize performance, enhance security, and drive innovation for your enterprise.
                            </p>
                        </a>

                        <a className="block rounded-xl border border-green-500 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10" href="#">
                            <FaVuejs className="size-10 text-green-800" />
                            <h2 className="mt-4 text-xl font-bold text-slate-700">VueJs</h2>
                            <p className="mt-1 text-sm text-gray-700">
                                Mastery in Vue.js for developing high-quality, interactive applications with a clean and modular approach, ensuring a superior user experience.
                            </p>
                        </a>
                        <a className="block rounded-xl border border-green-500 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                            href="#">
                            <FaFigma className="size-10 text-[#40A578]" />
                            <h2 className="mt-4 text-xl font-bold text-slate-700">Design</h2>
                            <p className="mt-1 text-sm text-gray-700">
                                Delivering design solutions that marry aesthetic appeal with practical usability. Passionate about enhancing user interaction through innovative design strategies.
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Skills;