import React from 'react'

export default function Nav() {
    return (
        <div className="flex-1">
            <nav>
                <ul className="flex justify-evenly space-x-4 text-base md:text-2xl" >
                    <li className="">About</li>
                    <li className="">Portfolio</li>
                    <li className="">Contact</li>
                    <li className="">Resume</li>
                </ul>
            </nav>
        </div>
    )
}
