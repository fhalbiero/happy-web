import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    position: relative;
    display:flex;

    aside {
        width: 440px;
        background: linear-gradient(329.54deg, #29B6D1 0%, #00c7c7 100%);
        padding: 80px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    
        h2 {
            font-size: 40px;
            font-weight: 800;
            line-height: 42px;
            margin-top: 64px; 
        }

        p {
            line-height: 28px;
            margin-top: 28px;
        }
    }

    footer {
        display:flex;
        flex-direction: column;

        line-height: 24px;
    
        strong {
            font-weight: 800;
        }

    }

    .leaflet-container {
        z-index: 5;
    }

    .create-orphanages {
        position: absolute;
        right: 40px;
        bottom: 40px;

        width: 64px;
        height: 64px;

        background-color: #15c3d6;
        border-radius: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;

        transition: all .3s;

        &:hover {
            background-color: #16d6eb;
        }
    }
    


`;