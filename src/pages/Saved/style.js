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
        min-height: 72vh;
        padding-top: 16vh;
        display: flex;
        justify-content: center;
        .title {
            font-size: 18px;
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