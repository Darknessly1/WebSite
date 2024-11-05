// import test1 from '../assets/test1.jpg';
// import test2 from '../assets/test2.jpg';
// import test3 from '../assets/test3.jpg';
// import test4 from '../assets/test4.jpg';

import imgtest1 from 'assets/imgtest1.jpg'
import imgtest2 from 'assets/imgtest2.jpg'
import imgtest3 from 'assets/imgtest3.jpg'
import imgtest4 from 'assets/imgtest4.jpg'


export default function Flipedimages() {
    return (
        <>
            <section className="lg:h-svh ml-8">

                <div className="flex flex-wrap mx-auto md:flex-nowrap mt-6pt-12 ml-20">

                    <div className="relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform  md:w-80 md:-ml-26 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
                        <article className="mx-auto rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
                            style={{
                                backgroundImage: `url(${imgtest1})`
                            }}
                        >
                            <div className="relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
                                <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
                                    <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two. </p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-80 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
                        <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
                            style={{
                                backgroundImage: `url(${imgtest2})`
                            }}
                        >
                            <div className="relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
                                <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
                                    <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction. Description three. </p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-80 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
                        <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
                            style={{
                                backgroundImage: `url(${imgtest3})`
                            }}
                        >
                            <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
                                <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
                                    <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four. </p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-80 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
                        <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
                            style={{
                                backgroundImage: `url(${imgtest4})`
                            }}
                        >
                            <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
                                <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
                                    <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Join us in embracing sustainability, where design and functionality meet eco-conscious decisions. Description five. </p>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>

            </section>
        </>
    )

}