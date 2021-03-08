import React, { useState, useEffect } from 'react'
import { Style } from './style'
import { InMemoryCache, ApolloClient, gql } from '@apollo/client'

export const ImageContainerSaved = ({ id, saved, setSaved, className }) => {
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const unsaveMeme = () => {
        setSaved(saved.filter((item) => item != id))
    }

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://oprec-backend.compfest.id/v1/graphql",
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlpDUzM2TlRmRTY0OWNySk9EY2NDbldWVEg4UmduUjRDaUhURnFydzlUTTAifQ.eyJleHAiOjE2MTU2NDg1OTAsImlhdCI6MTYxNDQzODk5MCwic3ViIjoiMzQzZDU5ODctMzA2YS00ODE1LThkY2ItZmEyZmQwZmY1MjNiIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS11c2VyLWlkIjoiMzQzZDU5ODctMzA2YS00ODE1LThkY2ItZmEyZmQwZmY1MjNiIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJhcHBsaWNhbnQiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYXBwbGljYW50In19.GttBtNbVqCEMA2kJkFs1o_Sq_SUqLA9YRHqRYLm-o0pHuvLIM448tl36pnpy42NQet9grBfKeR-wTORgZXBpAfegGEcJi5fJnjP75ZuSvuhl8ekjme313Hu-Z1av9m3s6C0dR6opUtYJ6UVtsIHrotb3SEIzFOEIWcy_pcAQHSgmi30c6mK2k79u7Ey7HjKOnGB-e8QuCLueFmYXgSUSxsxRobDFMp43Q3qx-FLHFYOslDxsdMLXzOGj7KPM2NEX9Ts35W05CuVafjyWcpjEzxBGpoAR6RSc4kU-rehOzsmim0t7VoeVTqYzzCF1fOrWxoKuPJqB_qFQYICsVg8rvBnSM-fIFMc6hTddIpn56V2A9MhGLblLl9FR05qlfQwBp13O2kRckML7CBBJugzonuaG0lmA37J6IE3GKwzRhdDwO-rhgmZfD20ydQHv5pBUwUf6OrAEs8629eBNrq_RrEXpQimzy-_2mxbpcRamgR-CQhq2XydB6ew84oowezpMBZEC-aWWUdGaWJaFiP-bcR6j7eUhTgchWNJM7N0m4k349IgMS1ii_G-JFhkP3-YbYMfLjj3LR2-MnLbtX8w1XkikElqTKfrsK5udFQvJ8MJ9iWnaLo_Ti1cP-aUXZum-G5Be3foJd33p_N8jnXa8KQs-_My0LHZiHQx46Zix27M"
        }
    })

    useEffect(() => {
        client.query({
            query: gql`
                query Memes {
                    memes(where: {_or: [{id: {_eq: ${id}}}]}) {
                    id
                    image_url
                    description
                    }
                }            
            `
        }).then(result => {
            setDescription(result.data.memes[0].description)
            setImageUrl(result.data.memes[0].image_url)
            setLoading(false)
        })
    }, [])
    
    return (
        <Style>
            <img
                src={imageUrl}
                className={className}
            />
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="left">
                        <h4>{description}</h4>
                    </div>
                    <div className="right" onClick={() => unsaveMeme()}>
                        <h4>Saved</h4>
                    </div>
                </div>
            </div>
        </Style>
    )
}
