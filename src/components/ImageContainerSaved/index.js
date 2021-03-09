import React, { useState } from 'react'
import { Style } from './style'
import { InMemoryCache, ApolloClient, gql } from '@apollo/client'

import { BACKEND_URL, BACKEND_TOKEN } from './../../services/constant'

import savedpic from './assets/saved.svg'

export const ImageContainerSaved = ({ id, saved, setSaved, className }) => {
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const unsaveMeme = () => {
        setSaved(saved.filter((item) => item !== id))
    }

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: `${BACKEND_URL}`,
        headers: {
            Authorization: `Bearer ${BACKEND_TOKEN}`
        }
    })
    
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
    })
    
    return (
        <Style>
            <img
                src={imageUrl}
                className={className}
                alt="meme"
            />
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="left">
                        <h4>{description}</h4>
                    </div>
                    <div className="right" onClick={() => unsaveMeme()}>
                        <img src={savedpic} width="25px" height="25px" alt="savedlogo" />
                        <h4>Saved</h4>
                    </div>
                </div>
            </div>
        </Style>
    )
}
