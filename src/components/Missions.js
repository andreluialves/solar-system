import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions"><Title headline="Missões" /></div>
        <MissionCard />
      </>
    );
  }
}

export default Missions;
