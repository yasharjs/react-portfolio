import React from 'react'
import {FaGithub, FaGoogle, FaLinkedin} from 'react-icons/fa'

export default function Footer() {
    return (
        <div>
            <footer className="p-5">
                <span className="text-5xl"><FaGithub></FaGithub></span>
                <span className="text-5xl"><FaGoogle></FaGoogle></span>
                <span className="text-5xl"><FaLinkedin></FaLinkedin></span>

            </footer>
        </div>
    )
}
