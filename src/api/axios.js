import axios from 'axios';

export default axios.create({
	baseURL: 'https://martijnspitterissuetracker.herokuapp.com/api/issuetracker'
});

// https://martijnspitterissuetracker.herokuapp.com/api/issuetracker
// http://localhost:5000/api/issuetracker
