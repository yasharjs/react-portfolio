import React from 'react'
import {FaDev} from 'react-icons/fa';

export default function About() {
    return (
        <div className="h-screen flex flex-col items-center space-y-8  p-8 text-center ">
            <h1 className="text-4xl font-extrabold">Who am I?</h1>
            <span className="text-4xl"><FaDev></FaDev></span>
            <p>Motivated web developer leveraging a background in customer service and sales to deliver client satisfaction and a more natural user experience through management and technical proficiency. Recently earned a certificate in Full Stack Development from the University of Toronto School of Continuing Studies, with newly acquired skills in JavaScript, React, MySQL, and responsive design. Known as an articulate problem solver, passionate about developing apps, focusing on mobile-first design and development. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.</p>
        </div>
    )
}
