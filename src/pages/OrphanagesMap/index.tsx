import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg';
import { Container } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
      <Container>
          <aside>
              <header>
                <img src={mapMarkerImg} alt="map"/>
                    
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita</p>  
              </header>
              
              <footer>
                <strong>Santa barbara d'Oeste</strong>
                <span>São Paulo</span>
              </footer>
          </aside>

          <Map  
            center={[-22.76506,-47.4437048]}
            zoom={15}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
           {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          </Map>

          <Link to="" className="create-orphanages">
              <FiPlus size={32} color="#fff" />
          </Link>

      </Container>
  );
}

export default OrphanagesMap;