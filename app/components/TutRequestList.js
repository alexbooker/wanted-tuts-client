import React from 'react';
import {Link, IndexLink} from 'react-router';
import TutRequestListItem from './TutRequestListItem.js';

function TutRequestList({tutRequests, moreTutRequests, fetchingTutRequests, onFetchMoreClicked}) {
  return (
    <div>
      <ul>
        <li><IndexLink to="/">Latest</IndexLink></li>
        <li><Link to="/popular">Popular</Link></li>
      </ul>
      <ul>
        {tutRequests.map((tutRequest, i) => <TutRequestListItem key={i} {...tutRequest} />)}
      </ul>
      <button disabled={moreTutRequests || fetchingTutRequests} onClick={onFetchMoreClicked}>
        { fetchingTutRequests ? 'Fetching...' : 'Fetch More' }
      </button>
    </div>
  );
}

export default TutRequestList;
