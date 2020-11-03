import styled from 'styled-components';

export const Container = styled.div`
    
    background: linear-gradient(329.54deg, #29B6D1 0%, #00c7c7 100%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 38px;

    .content-wrapper {

        background: url('../../images/landing.svg') no-repeat 90% center;
        position: relative;

        width: 100%;
        max-width: 1100px;
        height: 100vh;
        max-height: 600px;

        display: flex;
        align-items: flex-start;
        flex-direction: column;

        justify-content: space-between;

        main {
            max-width: 380px;
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h1 {
                margin-top: 48px;
                font-size: 56px;
                font-weight: 900;
                line-height: 58px;
            }

            p {
                margin-top: 48px;
                font-size: 24px;
                font-weight: 600;
                line-height: 34px;
            }
        }


        .location {
            position: absolute;
            right:0;
            top: 0;

            display: flex;
            flex-direction: column;

            font-size: 24px;
            line-height: 34px;
        }

        .enter-app {
            position: absolute;
            right: 0;
            bottom: 0;

            width: 80px;
            height: 80px;

            background-color: #ffd666;
            border-radius: 30px;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: all .3s;

            &:hover {
                background-color: #96feff;
            }
        }
    }


`;