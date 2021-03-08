import React from 'react'
import { Style } from './style'

export const ImageContainer = ({ src, className, description, isSaved, saved, setSaved, id }) => {
    if (!saved) {
        setSaved([])
    }
    const saveMeme = () => {
        if (!isSaved) {
            setSaved([...saved, id])
        } else {
            setSaved(saved.filter((item) => item != id))
        }
    }
    
    return (
        <Style>
            <img
                src={src}
                className={className}
            />
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="left">
                        <h4>{description}</h4>
                    </div>
                    <div className="right" onClick={() => saveMeme()}>
                        {isSaved &&
                            <h4>Saved</h4>
                        }
                        {!isSaved &&
                            <h4>Save</h4>
                        }
                    </div>
                </div>
            </div>
        </Style>
    )
}
