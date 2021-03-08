import React, { useState } from 'react'
import Masonry from "react-responsive-masonry"
import { Link } from 'react-router-dom'
import { Style } from './style'

export const Landing = () => {
    const [searchText, setSearchText] = useState('')
    const [searchBarHasBeenMoved, setSearchBarHasBeenMoved] = useState(false)
    const [initialPage, setInitialPage] = useState(true)
    const [loading, setLoading] = useState(false)

    // kalo loading == false, display datanya, tapi ini muncul problem pas di initial page. maka gua kasih state baru yaitu initialpage

    const searchNow = (e) => {
        if (e === 'Enter') {
            if (!searchBarHasBeenMoved) {
                setSearchBarHasBeenMoved(true)
            }
            if (initialPage) {
                setInitialPage(false)
            }

            setLoading(true)
            // kasih animation loading gitu
            // fetch dari backend
            // kalo udah, setLoading(false)
            // tampilin datanya


            console.log("search this: "+searchText)
                
            setLoading(false)
        }
    }

    const images = [
        "https://picsum.photos/200/300?image=1050",
        'http://images.unsplash.com/photo-1485550409059-9afb054cada4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cmFuZG9tfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080',
        "https://picsum.photos/300/300?image=206",
        'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg',
        'http://newnation.sg/wp-content/uploads/random-pic-internet-22.jpg',
        'https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg',
        "https://picsum.photos/200/300?image=1050",
        'http://images.unsplash.com/photo-1485550409059-9afb054cada4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cmFuZG9tfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080',
        "https://picsum.photos/300/300?image=206",
        'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg',
        'http://newnation.sg/wp-content/uploads/random-pic-internet-22.jpg',
        'https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg',
        "https://picsum.photos/200/300?image=1050",
        'http://images.unsplash.com/photo-1485550409059-9afb054cada4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cmFuZG9tfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080',
        "https://picsum.photos/300/300?image=206",
        'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg',
        'http://newnation.sg/wp-content/uploads/random-pic-internet-22.jpg',
        'https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg',
        "https://picsum.photos/200/300?image=1050",
        'http://images.unsplash.com/photo-1485550409059-9afb054cada4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cmFuZG9tfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080',
        "https://picsum.photos/300/300?image=206",
        'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg',
        'http://newnation.sg/wp-content/uploads/random-pic-internet-22.jpg',
        'https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg',
    ]

    return (
        <Style initialPage={initialPage}>
            <div className="navbar">
                <div className="navbar-title">
                    <a>KESEGARAN COMPFEST</a>
                </div>
                <div className="navbar-links">
                    <ul>
                        <li>Explore</li>
                        <li><Link to="/saved">Saved</Link></li>
                    </ul>
                </div>
            </div>
            <div className="content">
                <div className="search">
                    <p>Explore.</p>
                    <input type="text" placeholder="search for memes..." onChange={(e) => setSearchText(e.target.value)} onKeyPress={(e) => searchNow(e.key)} />
                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" width="25px" height="25px" />
                </div>
                {!initialPage &&
                    <div className="searched-content">
                        <Masonry columnsCount={5} gutter="10px">
                            {images.map((image, i) => (
                                <img
                                    key={i}
                                    src={image}
                                    style={{width: "100%", display: "block"}}
                                />
                            ))}
                        </Masonry>
                    </div>
                }
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
