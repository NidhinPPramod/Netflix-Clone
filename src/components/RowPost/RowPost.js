import React, {useEffect, useState} from 'react'
import "./RowPost.css"
import axios from '../../axios';
import {API_KEY, ImageUrl} from "../constants/constants";
import YouTube from "react-youtube";

const RowPost = (props) => {

    const [movie, setMovie] = useState([])
    const [urlId, setUrlId] = useState('')

    const opts = {
        height: '390',
        width: '100%',
        close:true,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovie(response.data.results)
        })
    }, [])

    const handleGetId = (id) => {
        console.log(id)
        axios(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            }
            else {
                alert("Trailer Not found")
            }
        })

    }

    return (
        <div className="row-posters">
            <h1 className="row-title">{props.title}</h1>
            <div className="posters">
                {movie.map((obj, index) => {
                    return (<img onClick={() => handleGetId(obj.id)} key={index}
                                 className={props.isSmall ? 'small-poster-image' : 'poster-image'}
                                 src={`${ImageUrl + obj.backdrop_path}`}
                                 alt=""/>)
                })}
            </div>
            {urlId && opts.close &&  <YouTube videoId={urlId.key} opts={opts}/>}
        </div>
    )
}

export default RowPost
