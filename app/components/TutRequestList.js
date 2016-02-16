import React from 'react';
import TutRequestListItem from './TutRequestListItem.js';

function TutRequestList({tutRequests}) {
  return (
    <ul>
      {tutRequests.map((tutRequest, i) => <TutRequestListItem key={i} {...tutRequest} />)}
    </ul>
  );
}

export default TutRequestList;
