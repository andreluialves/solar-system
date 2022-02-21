import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        { missions.map((item) => (<MissionCard
          key={ item.name }
          name={ item.name }
          year={ item.year }
          country={ item.country }
          destination={ item.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
