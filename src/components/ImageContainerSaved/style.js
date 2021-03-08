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
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
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
                width: 70%;
                /* background-color: red; */
                border-bottom-left-radius: 5px;
                display: flex;
                align-items: center;
                padding-left: 1.5ch;
                h4 {
                    font-weight: 600;
                }
            }
            .right {
                height: 100%;
                width: 30%;
                /* background-color: yellow; */
                border-bottom-right-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    &:hover {
        .wrapper {
            display: block;
        }
    }
`;