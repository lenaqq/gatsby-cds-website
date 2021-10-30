import React, { useState, useEffect } from 'react'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Travel Section</h1>
            <p>Plan your trip</p>
            <div className="hero-btns">
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default HeroSection