import React from 'react'
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner-btns">
                    <button className="btn">Play</button>
                    <button className="btn">My list</button>
                </div>
                <h1 className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.</h1>
            </div>
            <div className="fade-bottom">

            </div>
        </div>
    )
}

export default Banner
