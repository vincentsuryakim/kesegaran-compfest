import React from 'react'
import { Style } from './style'

import savedpic from './assets/saved.svg'
import savepic from './assets/save.svg'

export const ImageContainer = ({ src, className, description, isSaved, saved, setSaved, id }) => {
    if (!saved) {
        setSaved([])
    }
    const saveMeme = () => {
        if (!isSaved) {
            setSaved([...saved, id])
        } else {
            setSaved(saved.filter((item) => item !== id))
        }
    }
    
    return (
        <Style>
            <img
                src={src}
                className={className}
                alt="meme"
            />
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="left">
                        <h4>{description}</h4>
                    </div>
                    <div className="right" onClick={() => saveMeme()}>
                        {isSaved &&
                            <>
                                <img src={savedpic} width="24px" height="24px" alt="savedlogo" />
                                <h4><span>Saved</span></h4>
                            </>
                        }
                        {!isSaved &&
                            <>
                                <img src={savepic} width="24px" height="24px" alt="savelogo" />
                                <h4>Save</h4>
                            </>
                        }
                    </div>
                </div>
            </div>
        </Style>
    )
}
