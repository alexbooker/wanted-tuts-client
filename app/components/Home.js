import React from 'react';
import TutRequestsList from './TutRequestList.js';
import tutRequestSource from '../sources/tutRequestSource';

export default class Home extends React.Component {
  constructor() {
    super();
    this.initialState = {
      tutRequests: [],
      pageNum: 1,
      moreTutRequests: false,
      fetchingTutRequests: true
    };
    this.state = {...this.initialState};
  }

  componentWillMount() {
    this.fetchTutRequests();
  }

  componentDidUpdate(prevProps) {
    const sortUpdated = this.props.params !== prevProps.params;
    if (sortUpdated) {
      this.setState(this.initialState, () => this.fetchTutRequests());
    }
  }

  fetchTutRequests() {
    const sortBy = this.props.location.pathname === '/popular' ? 'score' : 'latest';
    tutRequestSource
      .getTutRequests(sortBy, this.state.pageNum)
      .then(function(data) {
        this.setState({
          tutRequests: this.state.tutRequests.concat(data),
          pageNum: this.state.pageNum + 1,
          moreTutRequests: data.length < 10,
          fetchingTutRequests: false
        });
      }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <TutRequestsList
          {...this.state}
          onFetchMoreClicked={this.fetchTutRequests.bind(this)}/>
      </div>
    );
  }
}
