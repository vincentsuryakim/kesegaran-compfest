import React, { useState, useEffect } from 'react'
import Masonry from "react-responsive-masonry"
import { Style } from './style'
import { ImageContainerSaved } from './../../components/ImageContainerSaved'

import facebook from './../assets/social/facebook.svg'
import instagram from './../assets/social/instagram.svg'
import line from './../assets/social/line.svg'
import linkedin from './../assets/social/linkedin.svg'
import twitter from './../assets/social/twitter.svg'
import youtube from './../assets/social/youtube.svg'

export const Saved = () => {
    const [saved, setSaved] = useState(() => {
        return localStorage.getItem('memes') != null ? JSON.parse(localStorage.getItem('memes')) : []
    });

    useEffect(() => {
        localStorage.setItem('memes', JSON.stringify(saved))
    }, [saved])


    return (
        <Style>
            <div className="content">
                <div className="title">
                    <h1>Your saved memes.</h1>
                </div>
                <div className="saved-content">
                    <Masonry columnsCount={3} gutter="25px">
                        {saved && saved.map((id) => (
                            <ImageContainerSaved 
                                id={id}
                                saved={saved}
                                setSaved={setSaved}
                                className="images"
                            />
                        ))}
                    </Masonry>
                </div>
            </div>
            <div className="footer">
                <footer>
                    <div className="title">
                        <a>KESEGARAN COMPFEST</a>
                    </div>
                    <div className="social">
                        <ul>
                            <img src={facebook} />
                            <img src={twitter} />
                            <img src={youtube} />
                            <img src={instagram} />
                            <img src={linkedin} />
                            <img src={line} />
                        </ul>
                    </div>
                    <div className="copyright">
                        <h4>&copy; 2021 Vincent Suryakim</h4>
                    </div>
                </footer>
            </div>
        </Style>
    )
}
