import React from 'react'
import './resume.css'

export default function Resume() {
    return (
        <div className="resume-container h-screen">
            <h2 className="text-4xl font-extrabold text-center">Resume</h2>
            <p>Download my <a href="/" >resume</a></p>
            <ul className="front-end">
                <h4 className="text-3xl mb-3">Front-end proficiencies:</h4>
                <li>- HTML</li>
                <li>- CSS</li>
                <li>- JavaScript & JQuery</li>
                <li>- Bootstap & Tailwind</li>
                <li>- React</li>
                <li>- Responsive and mobile friendly design</li>
            </ul>
            <ul className="back-end">
                <h4 className="text-3xl mb-3">Back-end proficiencies:</h4>
                <li>- APIs</li>
                <li>- Node</li>
                <li>- Express </li>
                <li>- MySQL, Sequelize</li>
                <li>- MongoDB, Mongoose</li>
                <li>- REST</li>
                <li>- GraphQL</li>
            </ul>
        </div>

    )
}
