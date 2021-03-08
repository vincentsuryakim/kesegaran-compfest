import React, { useState, useEffect } from 'react'
import Masonry from "react-responsive-masonry"
import { Style } from './style'
import { ImageContainerSaved } from './../../components/ImageContainerSaved'

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
                                save={saved}
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
                            {/* <img src="https://www.random.org/analysis/randbitmap-wamp-section.png" /> */}
                            <p>F</p>
                            <p>T</p>
                            <p>Y</p>
                            <p>I</p>
                            <p>L</p>
                            <p>L</p>
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
