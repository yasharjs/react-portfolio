import React from 'react'

import Nav from '../Nav'

export default function Header() {
    return (
        <div className="p-4 flex justify-evenly items-center space-x-2 ">
            <header className="flex-1 text-3xl md:text-5xl">
                <h2>
                    <a href="/">Yashar</a>
                </h2>
            </header>
            <Nav></Nav>
        </div>
        
    )
}
