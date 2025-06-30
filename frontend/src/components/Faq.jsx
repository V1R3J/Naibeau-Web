import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const accordionData = [
    {
        question: "How to book an appointment?",
        answer: "Download the Naibeau app, choose your preferred partner based on price and ratings, select a service, pick an available slot, and confirm your booking. Enjoy professional beauty and wellness services at your home in Ahmedabad.", 
    },
    {
        question: "What services do you offer?",
        answer: "Naibeau offers facials, waxing, manicures, pedicures, haircuts, makeup, spa treatments, and more. Experience premium home salon services tailored to your needs in Ahmedabad.",
    },
    {
        question: "How to choose preferred service partners?",
        answer: "Browse through partners on the Naibeau app based on their price, ratings, and reviews. Compare and book the ideal match for a personalized home salon experience.",
    },
    {
        question: "How to check available slots of the partners?",
        answer: "Open the partner's profile on the Naibeau app and click on the slot icon to view available time slots. Book instantly and enjoy hassle-free beauty services at your convenience.",
    },
    {
        question: "What is the Meaning of Naibeau?",
        answer: "Naibeau combines 'Nai' (barber) and 'Beau' (beautiful), symbolizing our mission to enhance your natural beauty with professional grooming and beauty services at your doorstep.",
    },
];

const Accordion = ({question, answer, forceActive = false}) => {
    const [active, setActive] = useState(false)
    
    const isActive = forceActive || active;
    
    return (
        <div className="border-b-4 border-2 border-red-300 rounded-3xl mb-3 bg-white overflow-hidden ">
            <div 
                className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50  transition-colors duration-200"  
                onClick={() => setActive(!active)}
            >
                <h3 className="text-[15px] lg:text-[20px] text-gray-600">{question}</h3>
                <div className={`text-gray-700 ml-4 text-auto flex-shrink-0 transition-transform duration-500 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-gray-600 text-[12px] lg:text-[17px] leading-relaxed pt-4">{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default function Faq() {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleExpandAll = () => {
    setAllExpanded(!allExpanded);
  };

  return (
    <div className="h-auto w-auto m-1 p-4 border-red-300 border-2 bg-[#FFD5D5] sm:mb-8 rounded-[32px] sm:rounded-[50px] max-w-[1500px] mx-auto sm:p-4 lg:px-12"> 
        <div className="flex justify-between items-start">
            <h1 className="font-montserrat text-[20px] sm:text-[30px] lg:text-[30px] text-left mt-3 mb-8 text-gray-800">
                Frequently Asked Questions
            </h1>
            <button 
                className="sm:h-[50px] sm:w-[150px] w-[100px] h-[40px] p-3 text-gray-600 bg-white mb-2 border-red-300 border-2 border-b-4 rounded-lg text-[10px] sm:text-[15px]"
                onClick={toggleExpandAll}
            >
                {allExpanded ? 'Collapse all' : 'Expand all'}
            </button>
        </div>
        
        <div className="max-w-[1400px] h-auto">
            {accordionData.map((item, index) => (
                <Accordion 
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    forceActive={allExpanded}
                />
            ))}
        </div>
    </div>
  )
}