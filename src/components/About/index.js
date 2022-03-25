import React from 'react'
import {FaDev} from 'react-icons/fa';

export default function About() {
    return (
        <div className="h-screen flex flex-col items-center space-y-8  p-8 ">
            <h1 className="text-4xl font-extrabold">Who am I?</h1>
            <span className="text-4xl"><FaDev></FaDev></span>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit aspernatur autem a vitae neque placeat accusamus aliquam ut est dolore voluptate, nam distinctio! Iste magni unde fugit similique doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia nobis saepe iste deleniti illo provident quam optio a earum excepturi mollitia similique soluta quod rem, natus, impedit perspiciatis ipsa!</p>
        </div>
    )
}
