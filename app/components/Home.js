import React from 'react';
import TutRequestsList from './TutRequestList.js';
import axios from 'axios';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      tutRequests: [],
      pageNum: 1,
      moreTutRequests: false,
      fetchingTutRequests: true
    };
  }

  componentWillMount() {
    this.fetchTutRequests();
  }

  fetchTutRequests() {
    const tutRequestsUrl = `https://wanted-tuts.com/api/tutorial-requests?page=${this.state.pageNum}`;
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
          onFetchMoreClicked={() => this.fetchTutRequests()}/>
      </div>
    );
  }
}
