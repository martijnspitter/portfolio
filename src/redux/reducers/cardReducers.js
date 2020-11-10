export const cardsReducer = () => {
	return [
		{
			id: 1,
			number: '1',
			title: 'IssueTracker',
			line1: 'Redux state',
			line2: 'Express server',
			line3: 'MySQL database',
			line4: 'Bootstrap styling',
			line5: '',
			githubLink: 'https://github.com/martijnspitter/issuetracker',
			appLink: 'http://martijnspitter.nl/issuetracker',
			text:
				'This was the first major project I took upon myself to create. It helped me learn about Redux, database design and api development. I use this IssueTracker on all my projects since its creation.',
			backtext: 'Learning Redux state management'
		},
		{
			id: 2,
			number: '2',
			title: 'Digital Garden',
			line1: 'Recoil state',
			line2: 'Express server',
			line3: 'MySQL database',
			line4: 'Bootstrap styling',
			line5: '',
			githubLink: 'https://github.com/martijnspitter/digitalgarden',
			appLink: 'http://digitalgarden.martijnspitter.nl/',
			text:
				'This web application was created when I heared of Digital Gardens at a online React seminair. This site was built specifically to experiment with Recoil and to create a space to .',
			backtext: 'Learning Recoil state management'
		},

		{
			id: 3,
			number: '3',
			title: 'Notes',
			line1: 'Recoil state',
			line2: 'Express server',
			line3: 'MongoDB database',
			line4: 'GraphQL queries',
			line5: 'Bootstrap styling',
			githubLink: 'https://github.com/martijnspitter/notesFrontend',
			appLink: 'http://notes.martijnspitter.nl/',
			text:
				'This web application was created to learn more about GraphQL. It allows drilling deep into the data with each query which makes retrieving data easy. It features a MongoDB (a semi non-relational database) with object orientated data structures.',
			backtext: 'Learning GraphQL and MongoDB'
		}
	];
};
