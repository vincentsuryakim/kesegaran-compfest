import styled from 'styled-components'

export const Style = styled.div`
    * {
        font-family: 'Inter', sans-serif;
        margin: 0px;
        padding: 0px;
    }

    width: 100vw;
    min-height: 100vh;

    .content {
        /* background-color: red; */
        min-height: calc(100vh - 85px - 85px - 3vh - 65px);
        padding-top: 150px;
        display: flex;
        align-items: center;
        flex-direction: column;
        .title {
            font-size: 18px;
            /* background-color: green; */
            margin-bottom: 2rem;
        }
        .saved-content {
            /* background-color: yellow; */
            width: 80%;
            display: flex;
            align-items: center;
            flex-direction: column;
            .no-memes {
                background-color: #F0F7FE;
                width: 100%;
                height: 15rem;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                .no-memes-inner {
                    /* background-color: yellow; */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    p {
                        color: #999999;
                        margin-bottom: 1rem;
                        font-size: 16px;
                    }
                    button {
                        border: transparent;
                        background-color: #0266D3;
                        padding-top: 12px;
                        padding-bottom: 12px;
                        padding-left: 24px;
                        padding-right: 24px;
                        color: white;
                        border-radius: 8px;
                        font-weight: 700;
                        font-size: 16px;
                        cursor: pointer;
                    }
                }
            }
            .images {
                width: 100%;
                display: block;
                border-radius: 8px;
            }
        }
    }
    .footer {
        background-color: #F6F6F6;
        width: 100%;
        margin-top: 3vh;
        height: 85px;
        display: flex;
        align-items: center;

        * {
            color: #999999;
        }

        footer {
            width: 100%;
            /* padding-top: 2rem;
            padding-bottom: 2rem; */
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .title {
                padding-left: 5rem;
                a {
                    font-weight: 800;
                }
            }
            .social {
                ul {
                    display: flex;
                    flex-direction: row;
                    img {
                        margin-left: 0.5rem;
                        margin-right: 0.5rem;
                        cursor: pointer;
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