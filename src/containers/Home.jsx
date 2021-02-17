import React from 'react';
import WorkIn from '../components/WorkIn';
import Welcome from '../components/Welcome';
import Worklist from '../components/WorkList';
import WorkListItem from '../components/WorkListItem';

const App = () => {
  return (
    <div className="home">
      <WorkIn />
      <Welcome>
        <Worklist>
          <WorkListItem />
          <WorkListItem />
          <WorkListItem />
          <WorkListItem />
        </Worklist>
      </Welcome>
    </div>
  );
}

export default App;
