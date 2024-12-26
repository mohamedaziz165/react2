
const players = [
    {
      name: 'Lionel Messi',
      team: 'Inter Miami CF',
      nationality: 'Argentin',
      jerseyNumber: 10,
      age: 36,
      imageUrl: 'https://example.com/messi.jpg',
    },
    {
      name: 'Cristiano Ronaldo',
      team: 'Al-Nassr',
      nationality: 'Portugais',
      jerseyNumber: 7,
      age: 38,
      imageUrl: 'https://example.com/ronaldo.jpg',
    },
    {
      name: 'Kylian Mbappé',
      team: 'Paris Saint-Germain',
      nationality: 'Français',
      jerseyNumber: 7,
      age: 24,
      imageUrl: 'https://example.com/mbappe.jpg',
    },
    {
      name: 'Kevin De Bruyne',
      team: 'Manchester City',
      nationality: 'Belge',
      jerseyNumber: 17,
      age: 32,
      imageUrl: 'https://example.com/debruyne.jpg',
    },
  ];
  
  export default players;
  
  import React from 'react';
  import { Card } from 'react-bootstrap';
  import PropTypes from 'prop-types';
  
  const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
      <Card style={{ width: '18rem', margin: '1rem', textAlign: 'center' }}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Équipe:</strong> {team}<br />
            <strong>Nationalité:</strong> {nationality}<br />
            <strong>Numéro:</strong> {jerseyNumber}<br />
            <strong>Âge:</strong> {age}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  
  Player.propTypes = {
    name: PropTypes.string,
    team: PropTypes.string,
    nationality: PropTypes.string,
    jerseyNumber: PropTypes.number,
    age: PropTypes.number,
    imageUrl: PropTypes.string,
  };
  
  Player.defaultProps = {
    name: 'Joueur Inconnu',
    team: 'Équipe Non Définie',
    nationality: 'Nationalité Non Définie',
    jerseyNumber: 0,
    age: 0,
    imageUrl: 'https://via.placeholder.com/150',
  };
  
  export default Player;
  

  import React from 'react';
  import Player from './Player';
  import players from '../data/players';
  
  const PlayersList = () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    );
  };
  
  export default PlayersList;
 
  import React from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import PlayersList from './components/PlayersList';
  
  const App = () => {
    return (
      <div className="App">
        <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>Liste des Joueurs</h1>
        <PlayersList />
      </div>
    );
  };
  
  export default App;
  
 
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  import './index.css';
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );