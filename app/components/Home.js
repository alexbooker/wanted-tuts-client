import React from 'react';
import TutRequestsList from './TutRequestList.js';
import axios from 'axios';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      tutRequests: []
    };
  }

  componentDidMount() {
    const tutRequestsUrl = `https://wanted-tuts.com/api/tutorial-requests?page=1`;
    axios
      .get(tutRequestsUrl)
      .then(function(response) {
        this.setState({
          tutRequests: this.state.tutRequests.concat(response.data)
        });
      }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <TutRequestsList {...this.state}/>
      </div>
    );
  }
}
