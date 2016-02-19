import {Link, IndexLink} from 'react-router';
import TutRequestListItem from './TutRequestListItem.js';

function SortOptions() {
  return (
    <ul>
      <li><IndexLink activeStyle={{color: 'red'}} to="/">Latest</IndexLink></li>
      <li><Link activeStyle={{color: 'red'}} to="/popular">Popular</Link></li>
    </ul>
  );
}

function FetchMoreButton({onFetchMoreClicked, moreTutRequests, fetchingTutRequests}) {
  return (
    <button
      disabled={moreTutRequests || fetchingTutRequests}
      onClick={onFetchMoreClicked}>
      { fetchingTutRequests ? 'Fetching...' : 'Fetch More' }
    </button>
  );
}

function TutRequestList(props) {
  const {tutRequests} = props;
  return (
    <div>
      <SortOptions />
      <ul>
        {tutRequests.map((tutRequest, i) => <TutRequestListItem key={i} {...tutRequest} />)}
      </ul>
      <FetchMoreButton {...props}/>
    </div>
  );
}

export default TutRequestList;
