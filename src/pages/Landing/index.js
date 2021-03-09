import React, { useState, useEffect } from 'react'
import Masonry from "react-responsive-masonry"
import { Style } from './style'
import { ImageContainer } from './../../components/ImageContainer'
import { InMemoryCache, ApolloClient, gql } from '@apollo/client'

import search from './assets/search.svg'
import facebook from './../assets/social/facebook.svg'
import instagram from './../assets/social/instagram.svg'
import line from './../assets/social/line.svg'
import linkedin from './../assets/social/linkedin.svg'
import twitter from './../assets/social/twitter.svg'
import youtube from './../assets/social/youtube.svg'
import logopic from './../assets/footer/logo.svg'

export const Landing = () => {
    const [searchText, setSearchText] = useState('')
    const [searchBarHasBeenMoved, setSearchBarHasBeenMoved] = useState(false)
    const [initialPage, setInitialPage] = useState(true)
    const [loading, setLoading] = useState(false)

    const [searchedArray, setSearchedArray] = useState([])

    const [saved, setSaved] = useState(() => {
        return localStorage.getItem('memes') != null ? JSON.parse(localStorage.getItem('memes')) : []
    });

    useEffect(() => {
        localStorage.setItem('memes', JSON.stringify(saved))
    }, [saved])

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://oprec-backend.compfest.id/v1/graphql",
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlpDUzM2TlRmRTY0OWNySk9EY2NDbldWVEg4UmduUjRDaUhURnFydzlUTTAifQ.eyJleHAiOjE2MTU2NDg1OTAsImlhdCI6MTYxNDQzODk5MCwic3ViIjoiMzQzZDU5ODctMzA2YS00ODE1LThkY2ItZmEyZmQwZmY1MjNiIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS11c2VyLWlkIjoiMzQzZDU5ODctMzA2YS00ODE1LThkY2ItZmEyZmQwZmY1MjNiIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJhcHBsaWNhbnQiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYXBwbGljYW50In19.GttBtNbVqCEMA2kJkFs1o_Sq_SUqLA9YRHqRYLm-o0pHuvLIM448tl36pnpy42NQet9grBfKeR-wTORgZXBpAfegGEcJi5fJnjP75ZuSvuhl8ekjme313Hu-Z1av9m3s6C0dR6opUtYJ6UVtsIHrotb3SEIzFOEIWcy_pcAQHSgmi30c6mK2k79u7Ey7HjKOnGB-e8QuCLueFmYXgSUSxsxRobDFMp43Q3qx-FLHFYOslDxsdMLXzOGj7KPM2NEX9Ts35W05CuVafjyWcpjEzxBGpoAR6RSc4kU-rehOzsmim0t7VoeVTqYzzCF1fOrWxoKuPJqB_qFQYICsVg8rvBnSM-fIFMc6hTddIpn56V2A9MhGLblLl9FR05qlfQwBp13O2kRckML7CBBJugzonuaG0lmA37J6IE3GKwzRhdDwO-rhgmZfD20ydQHv5pBUwUf6OrAEs8629eBNrq_RrEXpQimzy-_2mxbpcRamgR-CQhq2XydB6ew84oowezpMBZEC-aWWUdGaWJaFiP-bcR6j7eUhTgchWNJM7N0m4k349IgMS1ii_G-JFhkP3-YbYMfLjj3LR2-MnLbtX8w1XkikElqTKfrsK5udFQvJ8MJ9iWnaLo_Ti1cP-aUXZum-G5Be3foJd33p_N8jnXa8KQs-_My0LHZiHQx46Zix27M"
        }
    })

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

            client.query({
                query: gql`
                    query Memes {
                        memes(where: {_or: [{title: {_ilike: "%${searchText}%"}}, {description: {_ilike: "%${searchText}%"}}]}) {
                        id
                        title
                        image_url
                        description
                        }
                    }                  
                `
            }).then(result => {
                console.log(result.data.memes)
                setSearchedArray(result.data.memes)
                setLoading(false)
            })
        }
    }

    return (
        <Style initialPage={initialPage}>
            <div className="content">
                <div className="search">
                    <p>Explore.</p>
                    <input type="text" placeholder="search for memes..." onChange={(e) => setSearchText(e.target.value)} onKeyPress={(e) => searchNow(e.key)} />
                    <img src={search} width="25px" height="25px" />
                </div>
                {!initialPage &&
                    <div className="searched-content">
                        <Masonry columnsCount={3} gutter="25px">
                            {searchedArray.map((image) => (
                                <ImageContainer 
                                    id={image.id}
                                    src={image.image_url}
                                    description={image.description}
                                    isSaved={saved.includes(image.id) ? true : false}
                                    saved={saved}
                                    setSaved={setSaved}
                                    className="images"
                                />
                            ))}
                        </Masonry>
                    </div>
                }
            </div>
            <div className="footer">
                <footer>
                    <div className="title">
                        <img src={logopic} width="25px" height="25px" />
                        <a>KESEGARAN.COMPFEST</a>
                    </div>
                    <div className="social">
                        <ul>
                            <a href="https://www.facebook.com">
                                <img src={facebook} />
                            </a>
                            <a href="https://twitter.com/vinceennnttt">
                                <img src={twitter} />
                            </a>
                            <a href="https://www.youtube.com">
                                <img src={youtube} />
                            </a>
                            <a href="https://www.instagram.com/vincentsuryakim/">
                                <img src={instagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/vincent-suryakim-70a80a1b6/">
                                <img src={linkedin} />
                            </a>
                            <a href="">
                                <img src={line} />
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
