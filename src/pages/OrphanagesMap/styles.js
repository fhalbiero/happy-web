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

    .map-popup {

        .leaflet-popup-content-wrapper {
            background-color: rgba(255, 255, 255, .9);
            box-shadow: none;
            border-radius: 20px;
        }

        .leaflet-popup-content {
           color: #0089a5;
           font-size: 22px;
           font-weight: bold;
           margin: 8px 12px;

           display: flex;
           justify-content: space-between; 
           align-items: center;

           a {
               width: 40px;
               height: 40px;
               background-color: #15c3d6;
               box-shadow: 17px 27px 41px rgba(23, 142, 166, .16);
               border-radius: 12px;

               display: flex;
               justify-content: center; 
               align-items: center;
           }
        }

        .leaflet-popup-tip-container {
            display: none;
        }
    }
    


`;