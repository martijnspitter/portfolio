export const cardOneReducer = () => {
	return {
		id: 1,
		number: '1',
		title: "The 'Trillo' project",
		line1: 'CSS',
		line2: 'CSS flexbox',
		line3: 'SASS',
		line4: '',
		line5: '',
		btnsource: 'https://github.com/martijnspitter/trillo',
		text:
			'This site was created as part of an advanced CSS course on Udemy. This site specifically was built to experiment with flexbox and has some small animations and a couple of svg elements.',
		backtext: 'Learning CSS with flexbox'
	};
};

export const cardTwoReducer = () => {
	return {
		id: 2,
		number: '2',
		title: "The 'Jammming' Project",
		line1: 'ReactJS',
		line2: 'CSS',
		line3: 'Spotify API',
		line4: '',
		line5: '',
		btnsource: 'https://github.com/martijnspitter/jammming',
		text:
			'This website was created as part of the Codecademy React course. Here we explore the possibilities of React and the Yelp API using asynchronous requests. Extra functionality that would need to be built in before going live is; retention of search results upon login and confirmation upon save.',
		backtext: 'Exploring React with the Yelp API'
	};
};

export const cardThreeReducer = () => {
	return {
		id: 3,
		number: '3',
		title: "The 'Streams' project",
		line1: 'ReactJS',
		line2: 'Redux',
		line3: 'Axios',
		line4: 'React-Router',
		line5: 'rtmp and json server',
		btnsource: 'https://github.com/martijnspitter/streams',
		text:
			'This website was created as part of an Advanced React course on Udemy. With it we explore Redux, React-Router and Axios. We created a json and rtmp server to host streams and data about the streams.',
		backtext: 'Exploring React, Redux, Axios and React-Router'
	};
};

export const cardFourReducer = () => {
	return {
		id: 4,
		number: '1',
		title: "The 'Ravenous' project",
		line1: 'ReactJS',
		line2: 'CSS',
		line3: 'Yelp API',
		line4: '',
		line5: '',
		btnsource: 'https://github.com/martijnspitter/ravenous',
		text:
			'This website was created as part of the React course on Codecademy. With it we explore the possibilities of React and make asynchronous requests of the Yelp API. We would need to add error handling before going live.',
		backtext: 'Exploring React with the Yelp API'
	};
};

export const cardFiveReducer = () => {
	return {
		id: 5,
		number: '2',
		title: "The 'Natours' project",
		line1: 'CSS',
		line2: 'CSS grids',
		line3: 'CSS animations',
		line4: 'SASS',
		line5: '',
		btnsource: 'https://github.com/martijnspitter/natours',
		text:
			'This website was created as part of an Advanced CSS course on Udemy. With it we explore CSS using a grid layout and we create lots of animations. It also served as an introduction in SASS',
		backtext: 'Exploring CSS using grids and creating animations'
	};
};

export const cardSixReducer = () => {
	return {
		id: 6,
		number: '3',
		title: "The 'Videos' project",
		line1: 'ReactJS',
		line2: 'Axios',
		line3: 'YouTube API',
		line4: '',
		line5: '',
		btnsource: 'https://github.com/martijnspitter/videos',
		text:
			'This website was created as part of an Advanced React course on Udemy. With it we explore the possibilities of Axios making requests of the YouTube API',
		backtext: 'Exploring React and Axios using the Youtube API'
	};
};

export const selectedCardReducer = (selectedCard = null, action) => {
	if (action.type === 'CARD_SELECTED') {
		return action.payload;
	}
	return selectedCard;
};
