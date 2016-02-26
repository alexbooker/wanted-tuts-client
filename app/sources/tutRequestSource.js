import axios from 'axios';

const tutRequestCache = { };

const tutRequestSource = {
  getTutRequests(sortBy, pageNum) {
    return new Promise(function(resolve) {
      const cacheKey = sortBy + pageNum;
      const cachedTutRequests = tutRequestCache[cacheKey];
      if (cachedTutRequests) {
        resolve(cachedTutRequests);
      } else {
        const tutRequestsUrl =
          `https://wanted-tuts.com/api/tutorial-requests?page=${pageNum}&sortBy=${sortBy}`;
        axios
          .get(tutRequestsUrl)
          .then(function(response) {
            const {data: tutRequests} = response;
            tutRequestCache[cacheKey] = tutRequests;
            resolve(tutRequests);
          });
      }
    });
  }
};

export default tutRequestSource;
