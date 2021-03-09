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