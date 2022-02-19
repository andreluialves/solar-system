import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions"><Title headline="Missões" /></div>
        { missions.map((item) => (<MissionCard
          key={ item.name }
          name={ item.name }
          year={ item.year }
          country={ item.country }
          destination={ item.destination }
        />))}
      </>
    );
  }
}

export default Missions;
