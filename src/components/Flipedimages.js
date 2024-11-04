import test1 from '../assets/test1.jpg';
import test2 from '../assets/test2.jpg';
import test3 from '../assets/test3.jpg';
import test4 from '../assets/test4.jpg';


export default function Flipedimages() {
    return (
        <>
            <section className="flex justify-center flex-col lg:h-svh ml-20 items-center">
                <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
                    <div>
                        {/* <h1>Animated images on hover</h1>
                        <p className="text-balance">Hover over the images to see the animation.</p> */}
                    </div>
                </div>
                <div className="flex flex-wrap mx-auto md:flex-nowrap mt-6 border-t pt-12 ml-20">
                    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
                        <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
                            style={{ 
                                backgroundImage: `url(${test1})` 
                            }}
                        >
                            <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
                                <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
                                    <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two. </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
                        <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"
                            style={{ 
                                backgroundImage: `url(${test2})` 
                            }}
                        >
                            <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
                                <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
                                    <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction. Description three. </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
                        <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group" 
                            style={{ 
                                backgroundImage: `url(${test3})` 
                            }}
                        >
                            <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
                                <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
                                    <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four. </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
                        <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group" 
                            style={{ 
                                backgroundImage: `url(${test4})` 
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
                <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center p-2">
                    <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-xl border">
                        <div className="flex w-0 flex-1 items-center p-4">
                            <div className="w-full">
                                <p className="text-sm font-medium text-neutral-900">Tutorial</p>
                                <p className="mt-1 text-sm text-neutral-500">
                                    How to creating animated blog cards with Astrojs and Tailwind CSS

                                </p>
                                <p className="mt-2 text-xs text-orange-600 underline"> <a href="https://lexingtonthemes.com"> by © Lexington Themes</a> </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col divide-y divide-neutral-200">
                                <div className="flex h-0 flex-1"> <a href="https://lexingtonthemes.com/tutorials/how-to-create-animated-blog-cards-with-astrojs-and-tailwind-css/" type="button" className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-600">Tutorial</a> </div>
                                <div className="flex h-0 flex-1"> <a href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/animated-blog-cards/index.astro" className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-600">Get the code</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}