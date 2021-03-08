import React from 'react'
import { Style } from './style'

export const Saved = () => {
    return (
        <Style>
            <div className="content">
                <div className="title">
                    <h1>Your saved memes.</h1>
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
