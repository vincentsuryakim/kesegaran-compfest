import styled from 'styled-components'
import Background from './assets/UnicornVectorGradient_20.jpg'

export const Style = styled.div`
    /* background-color: yellow; */
    position: relative;
    .wrapper {
        cursor: pointer;
        width: 100%;
        height: 4rem;
        background-image: url(${Background});
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        position: absolute;
        bottom: 0%;
        display: none;
        background-size: cover;
        .wrapper-inner {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            .left {
                height: 100%;
                width: 65%;
                /* background-color: red; */
                border-bottom-left-radius: 8px;
                display: flex;
                align-items: center;
                padding-left: 1.5ch;
                h4 {
                    font-weight: 600;
                    color: #333333;
                }
            }
            .right {
                height: 100%;
                width: 35%;
                /* background-color: yellow; */
                border-bottom-right-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                h4 {
                    margin-left: 0.25rem;
                    color: #333333;
                    span {
                        color: #FF9500;
                    }
                }
            }
        }
    }
    &:hover {
        .wrapper {
            display: block;
        }
    }
`;