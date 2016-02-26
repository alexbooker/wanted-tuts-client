import axios from 'axios';

const tutRequestSource = {
  getTutRequests(sortBy, pageNum) {
    const tutRequestsUrl =
      `https://wanted-tuts.com/api/tutorial-requests?page=${pageNum}&sortBy=${sortBy}`;
    return axios
      .get(tutRequestsUrl);
  }
};

export default tutRequestSource;
