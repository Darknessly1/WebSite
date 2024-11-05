// import test1 from '../assets/test1.jpg';
// import test2 from '../assets/test2.jpg';
// import test3 from '../assets/test3.jpg';
import test4 from '../assets/test4.jpg';
import test5 from '../assets/test5.jpg';
import test6 from '../assets/test6.jpg';
import imgtest6 from '../assets/imgtest6.webp';
import imgtest7 from '../assets/imgtest7.avif';
import imgtest8 from '../assets/imgtest8.webp';
import { useState } from 'react';

export default function Hidden() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const articles = [
        { id: 1, title: "01⏤ Adobe", description: "Crafting an effortless journey with user-first.", image: imgtest6, color: "text-cyan-400" },
        { id: 2, title: "02⏤ Office", description: "Our platform is designed for simplicity and ease.", image: imgtest7, color: "text-cyan-400" },
        { id: 3, title: "03⏤ Windows activation", description: "Our design philosophy centers around the user.", image: imgtest8, color: "text-cyan-400" },
        { id: 4, title: "04⏤ Changing", description: "This is the Changing Section.", image: test4, color: "text-cyan-400" },
        { id: 5, title: "05⏤ Making", description: "The Making of the Crafting.", image: test5, color: "text-cyan-400" },
        { id: 6, title: "06⏤ Technologies", description: "The Tech of the Next Generation.", image: test6, color: "text-cyan-400" },
    ];

    const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 3) % articles.length);
    const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 3 + articles.length) % articles.length);

    return (
        <section className="text-center">
            <div className='text-black text-6xl font-bold mb-12'>
                <div className="flex items-center justify-center ">
                    <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-gray-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
                        This is example of glowing text
                    </span>
                    <h1
                        className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-green-500 via-green-700 to-green-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                        Licences For Salle
                    </h1>
                </div>
            </div>
            <div className="flex justify-between items-center max-w-5xl mx-auto space-x-4">
                <button onClick={handlePrev} className="text-3xl">&#8592;</button>

                <div className="flex space-x-6 my-10">
                    {articles.slice(currentIndex, currentIndex + 3).map((article) => (
                        <article key={article.id} className="flex justify-center content-center shadow-xl bg-cover bg-center min-h-2 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                            style={{ backgroundImage: `url(${article.image})`, width: '300px', height: '600px' }}
                        >
                            <div className=" bg-black p-8 h-40 justify-end flex flex-col">
                                <h1 className="text-white mt-2 text-xl mb-5 transform  translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-orange-500">{article.title}</h1>
                                <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 ">{article.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <button onClick={handleNext} className="text-3xl">&#8594;</button>
            </div>
        </section>
    )
}
