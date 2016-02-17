import React from 'react';
import TutRequestListItem from './TutRequestListItem.js';

function TutRequestList({tutRequests, moreTutRequests, fetchingTutRequests, onFetchMoreClicked}) {
  return (
    <div>
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
