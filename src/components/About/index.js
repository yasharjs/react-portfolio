import React from 'react'
import {FaDev} from 'react-icons/fa';

export default function About() {
    return (
        <div className="h-screen flex flex-col items-center space-y-8  p-8 text-center ">
            <h1 className="text-4xl font-extrabold">Who am I?</h1>
            <span className="text-4xl"><FaDev></FaDev></span>
            <p>Motivated developer with a background in customer service and sales. Recently earned a certificate in Full Stack Development from University of Toronto School of Continuing Studies, proficient in MERN Stack development. Known as an articulate problem solver, introducing passion and curiosity to every project. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.</p>
        </div>
    )
}
