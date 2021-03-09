import React, { useState, useEffect } from 'react'
import Masonry from "react-responsive-masonry"
import { Style } from './style'
import { ImageContainerSaved } from './../../components/ImageContainerSaved'
import { Link } from 'react-router-dom'

import facebook from './../assets/social/facebook.svg'
import instagram from './../assets/social/instagram.svg'
import line from './../assets/social/line.svg'
import linkedin from './../assets/social/linkedin.svg'
import twitter from './../assets/social/twitter.svg'
import youtube from './../assets/social/youtube.svg'
import logopic from './../assets/footer/logo.svg'

export const Saved = () => {
    const [saved, setSaved] = useState(() => {
        return localStorage.getItem('memes') != null ? JSON.parse(localStorage.getItem('memes')) : []
    });

    useEffect(() => {
        localStorage.setItem('memes', JSON.stringify(saved))
    }, [saved])

    console.log(saved)
    return (
        <Style>
            <div className="content">
                <div className="title">
                    <h1>Your saved memes.</h1>
                </div>
                <div className="saved-content">
                    {saved.length === 0 &&
                        <div className="no-memes">
                            <div className="no-memes-inner">
                                <p>You have no saved memes. Explore now!</p>
                                <Link to="/"><button>Explore</button></Link>
                            </div>
                        </div>
                    }
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
                        <img src={logopic} width="25px" height="25px" alt="logo" />
                        <p>KESEGARAN.COMPFEST</p>
                    </div>
                    <div className="social">
                        <ul>
                            <a href="https://www.facebook.com">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="https://twitter.com/vinceennnttt">
                                <img src={twitter} alt="twitter" />
                            </a>
                            <a href="https://www.youtube.com">
                                <img src={youtube} alt="youtube" />
                            </a>
                            <a href="https://www.instagram.com/vincentsuryakim/">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/vincent-suryakim-70a80a1b6/">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a href="https://line.me/en/">
                                <img src={line} alt="line" />
                            </a>
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
