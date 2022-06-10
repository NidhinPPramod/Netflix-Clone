import React, {useEffect, useState} from 'react'
import {API_KEY, ImageUrl} from "../constants/constants"
import "./Banner.css"
import axios from "../../axios";


const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
        })
    }, [])

    return (
        <div className="banner" style={{backgroundImage: `url(${movie ? ImageUrl + movie.backdrop_path : ""})`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner-btns">
                    <button className="btn">Play</button>
                    <button className="btn">My list</button>
                </div>
                <h1 className="description">{movie ?movie.overview:""}</h1>
            </div>
            <div className="fade-bottom">
            </div>
        </div>
    )
}

export default Banner
