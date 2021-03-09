import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

import logopic from './assets/logo.svg'
import exploreblue from './assets/exploreblue.svg'
import savedblack from './assets/savedblack.svg'
import exploreblack from './assets/exploreblack.svg'
import savedblue from './assets/savedblue.svg'

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
            display: flex;
            align-items: center;
            padding-left: 5rem;
            color: #484848;
            a {
                margin-left: 0.3rem;
                font-weight: 800;
            }
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
                    display: flex;
                    align-items: center;
                    .linked {
                        text-decoration: none;
                        color: black;
                        font-size: 16px;
                        margin-left: 0.3rem;
                        transform: translateY(-0.12rem);
                    }
                    .here {
                        color: #0266D3;
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
    console.log(useLocation().pathname)

    return (
        <Style>
        <div className="navbar">
            <div className="navbar-title">
                <img src={logopic} />
                <a>KESEGARAN.COMPFEST</a>
            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        <Link to="/">
                            {useLocation().pathname === "/" &&
                                    <img src={exploreblue} width="25px" height="25px" />
                            }
                            {useLocation().pathname === "/saved" &&
                                    <img src={exploreblack} width="25px" height="25px" />
                            }
                        </Link>
                        <Link to="/" className={`linked ${useLocation().pathname === "/" ? "here" : ""}`}>Explore</Link>
                    </li>
                    <li>
                        <Link to="/saved">
                            {useLocation().pathname === "/" &&
                                <img src={savedblack} width="25px" height="25px" />
                            }
                            {useLocation().pathname === "/saved" &&
                                <img src={savedblue} width="25px" height="25px" />
                            }
                        </Link>
                        <Link to="/saved" className={`linked ${useLocation().pathname === "/saved" ? "here" : ""}`}>Saved</Link>
                    </li>
                </ul>
            </div>
        </div>
    </Style>
    )
}
