import React from "react"
import dariPic from "../assets/Dariel Mera_lq.jpg"

export default function Info() {
    return (

        <div className="info-container">
            <div className="photo">
                <img id="daripic" src={dariPic}  alt="pic of user avatar" />
            </div>
            <div className="info">
                <h1>Dariel Mera</h1>
                <p>FrontEnd Dev</p>
                <p>Daridariel@yahoo.com</p>
                <div className="all-links">
                <a href="https://www.linkedin.com/in/dariel-mera-b6454057/"><p>dariel-mera-b6454057/</p></a>
                </div>
            </div>
            <div className="buttons">
                <button className="email">Email</button>
                <button className="linkedin">Linkedin</button>
            </div>
        </div>

    )
}