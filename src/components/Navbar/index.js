import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Style = styled.div`
    * {
        font-family: 'Inter', sans-serif;
        margin: 0px;
        padding: 0px;
    }

    .navbar {
        height: 85px;
        width: 100%;
        /* padding-top: 2rem; */
        /* padding-bottom: 2rem; */
        position: absolute;
        top: 0%;
        background-color: white;
        -webkit-box-shadow: 10px 14px 21px -26px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 14px 21px -26px rgba(0,0,0,0.75);
        box-shadow: 10px 14px 21px -26px rgba(0,0,0,0.75);
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        .navbar-title {
            padding-left: 5rem;
        }
        .navbar-links {
            padding-right: 5rem;
            ul {
                list-style-type: none;
                display: flex;
                flex-direction: row;
                li {
                    text-decoration: none;
                    font-weight: 600;
                    margin-left: 3rem;
                    .linked {
                        text-decoration: none;
                        color: black;
                        font-size: 16px;
                    }
                }
            }
        }

        a {
            font-weight: 700;
            font-size: 18px;
        }
    }
`;

export const Navbar = () => {
    return (
        <Style>
        <div className="navbar">
            <div className="navbar-title">
                <a>KESEGARAN COMPFEST</a>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/" className="linked">Explore</Link></li>
                    <li><Link to="/saved" className="linked">Saved</Link></li>
                </ul>
            </div>
        </div>
    </Style>
    )
}
