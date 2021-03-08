import styled from 'styled-components'

export const Style = styled.div`
    /* background-color: red; */
    width: 100vw;
    height: auto;
    min-height: 100vh;

    * {
        font-family: 'Inter', sans-serif;
        margin: 0px;
        padding: 0px;
    }

    .content {
        /* background-color: red; */
        min-height: 72vh;
        padding-top: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: "flex-start";
        align-items: center;

        .search {
            transform: ${props => props.initialPage ? "translateY(11rem)" : ""};
            transition: 0.15s linear;
            background-color: white;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            p {
                margin-bottom: 2.3rem;
                font-size: 35px;
                font-weight: 700;
            }
            input {
                height: 2.8rem;
                width: 45ch;
                border-radius: 5px;
                border: 1px solid black;
                padding-left: 7ch;
                padding-right: 1ch;
            }
            img {
                position: absolute;
                top: 72%;
                left: 1ch;
            }
        }
        .searched-content {
            /* background-color: yellow; */
            width: 80%;
            display: flex;
            align-items: center;
            flex-direction: column;
            .images {
                width: 100%;
                display: block;
                border-radius: 5px;
            }
        }
    }
    
    .footer {
        background-color: rgb(243, 244, 246);
        width: 100%;
        margin-top: 3vh;

        * {
            color: rgb(156, 163, 175, 1);
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