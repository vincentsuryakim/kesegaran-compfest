import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    .footer {
        background-color: rgb(243, 244, 246);
        margin-top: 2rem;
        width: 100%;

        * {
            color: rgb(156, 163, 175, 1);
            font-family: 'Inter', sans-serif;
            margin: 0px;
            padding: 0px;
        }

        footer {
            padding-top: 2rem;
            padding-bottom: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .title {
                padding-left: 5rem;
            }
            .social {
                ul {
                    display: flex;
                    flex-direction: row;
                    img {
                        margin-left: 0.5rem;
                        margin-right: 0.5rem;
                    }
                    p {
                        margin-left: 0.5rem;
                        margin-right: 0.5rem;
                    }
                }
            }
            .copyright {
                padding-right: 5rem;
                h4 {
                    font-weight: 500;
                }
            }
        }

        a {
            font-weight: 700;
            font-size: 18px;
        }
        
    }
`;

export const Footer = () => {
    return (
        <Style>
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
