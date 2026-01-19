// TimelineTabs.tsx

import { ChevronDown, Handshake, HeartPlus, Lightbulb, MessagesSquare, Package, Ratio, Users } from "lucide-react";
import React, { useState } from "react";

const processSteps = [
    {
        name: "Meet", icon: <Handshake size={40} />,
        description: "We begin by connecting with you to understand your vision, needs, and business objectives, laying the foundation for a collaborative partnership."
    },
    {
        name: "Discuss", icon: <MessagesSquare size={40} />,
        description: "Together, we delve deeper into your requirements, exploring challenges, goals, and priorities to align our approach with your expectations."
    },
    {
        name: "Brainstorm", icon: <Lightbulb size={40} />,
        description: "Our expert network engages in creative ideation, analyzing possible solutions and innovations that best suit your unique situation."
    },
    {
        name: "Team Forming", icon: <Users size={40} />,
        description: "We rapidly assemble a tailored team of highly skilled professionals whose expertise matches your project’s specific demands and timeframe."
    },
    {
        name: "Solution", icon: <Ratio size={40} />,
        description: "Our team architect and develop robust, scalable, and user-friendly technology solutions, ensuring excellence in design and implementation."
    },
    {
        name: "Delivery", icon: <Package size={40} />,
        description: "We execute a smooth, timely delivery of your project, maintaining high quality standards and transparent communication at every stage."
    },
    {
        name: "Continuous Support", icon: <HeartPlus size={40} />,
        description: "Beyond delivery, we’re committed to your long-term success by providing ongoing support, mentorship, and opportunities for continuous improvement and growth."
    }
];

export default function TimelineTabs() {
    const [active, setActive] = useState(0);

    return (
        <section className="max-w-5xl mx-auto lg:px-4 py-10">
            <div className="hidden lg:block">
                {/* Timeline Bar with Tabs */}
                <div className="flex flex-col md:flex-row items-center
             md:justify-between gap-y-10 md:gap-x-0 relative">
                    {processSteps.map((step, idx) => {
                        if (active === idx)
                            return (<div key={step.name} className="relative z-10 flex cursor-pointer 
                     flex-col items-center md:w-1/7" onClick={() => setActive(idx)}>
                                <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex
                         items-center justify-center text-lg font-bold shadow-lg">{step.icon}</div>
                                <span className="mt-4 font-thin">{step.name}</span>
                                <span className="mt-1 bg-[#171618] p-2 
                                border border-gray-800 border-b-0
                                 rounded-t-lg"><ChevronDown size={30} className="font-black"/></span>
                            </div>)
                        else
                            return (
                                <div key={step.name} className="relative z-10 flex cursor-pointer 
                     flex-col items-center md:w-1/7" onClick={() => setActive(idx)}>
                                    <div className="bg-gray-600 text-white rounded-full w-20 h-20 flex
                         items-center justify-center text-lg font-bold shadow-lg">{step.icon}</div>
                                    <span className="mt-4 font-thin">{step.name}</span>
                                </div>
                            )
                    })}
                </div>
                {/* Description Panel */}
                <div className="bg-[#171618] border border-gray-800 rounded-xl p-6 shadow-xl">
                    <h3 className="text-lg md:text-xl font-bold mb-5 text-[#e0dbf0]
                 uppercase flex items-center justify-start gap-2">{processSteps[active].icon}
                        {processSteps[active].name}</h3>
                    <p className="text-[#b9b7c1]">{processSteps[active].description}</p>
                </div>
            </div>
            <div className="lg:hidden">
                {processSteps.map((step, idx) => {
                    return (
                        <div key={step.name} className="bg-[#171618]
                         border border-gray-800 rounded-xl p-6 shadow-xl mb-5">
                            <h3 className="text-lg md:text-xl font-bold
                             mb-5 text-[#e0dbf0] uppercase flex
                              items-center justify-start gap-2">{step.icon}
                                {step.name}</h3>
                            <p className="text-[#b9b7c1]">{step.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
