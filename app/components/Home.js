import React from 'react';
import TutRequestsList from './TutRequestList.js';
import axios from 'axios';

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
    const sortBy = this.props.params.sort === 'popular' ? 'score' : 'latest';
    const tutRequestsUrl = `https://wanted-tuts.com/api/tutorial-requests?page=${this.state.pageNum}&sortBy=${sortBy}`;
    axios
      .get(tutRequestsUrl)
      .then(function(response) {
        this.setState({
          tutRequests: this.state.tutRequests.concat(response.data),
          pageNum: this.state.pageNum + 1,
          moreTutRequests: response.data.length < 10,
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
