import { useState } from "react";

export default function Testimony() {
    const testimonies = [
        {
            name: "Alice",
            text: "Great service! Highly recommended.",
            role: "Client",
            img: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            name: "Bob",
            text: "Professional and reliable team.",
            role: "Collaborator",
            img: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            name: "Charlie",
            text: "Amazing experience working together.",
            role: "Client",
            img: "https://randomuser.me/api/portraits/men/3.jpg",
        },
    ];

    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((current - 1 + testimonies.length) % testimonies.length);
    const next = () => setCurrent((current + 1) % testimonies.length);

    return (
        <>
            <div className="h-[90vh] w-full relative mt-[600px] lg:mt-0">
                <h1 className="text-gray-600 text-center text-4xl underline underline-offset-8 font-extrabold">
                    _-Testimony-_
                </h1>
                <div>
                    <div className="flex flex-col items-center ml-10 md:ml-0 my-8">
                        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 transition-all duration-300 flex flex-col items-center">
                            <img
                                src={testimonies[current].img}
                                alt={testimonies[current].name}
                                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-gray-200"
                            />
                            <p className="text-gray-700 text-lg italic mb-4">"{testimonies[current].text}"</p>
                            <div className="flex items-center justify-between w-full">
                                <span className="font-bold text-gray-900">{testimonies[current].name}</span>
                                <span className="text-sm text-gray-500">{testimonies[current].role}</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={prev}
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                                aria-label="Previous"
                            >
                                &#8592;
                            </button>
                            <button
                                onClick={next}
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                                aria-label="Next"
                            >
                                &#8594;
                            </button>
                        </div>
                        <div className="flex justify-center mt-2 gap-2">
                            {testimonies.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`h-2 w-2 rounded-full ${idx === current ? "bg-gray-800" : "bg-gray-300"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-center text-wrap px-10 lg:px-2">
                    -- Here is a section resvered to all <br />
                    -- testimony of clients and collaborators and dear compliments --
                </p>
            </div>
        </>
    );
}
