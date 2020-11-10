import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

export default function CustomChatBot(props) {
	const theme = {
		background: '#f0eeee',
		fontFamily: 'Lato, Arial, sans-serif',

		headerBgColor: 'rgba(51,101,138,0.9)',
		headerFontColor: '#fff',
		headerFontSize: '25px',

		botBubbleColor: 'rgba(51,101,138,0.9)',
		botFontColor: '#fff',
		userBubbleColor: '#fff',
		userFontColor: '#4c4c4c'
	};

	const config = {
		floating: true,
		width: '350px'
	};

	const steps = [
		{
			id: 'Greet',
			message: 'Hello, Welcome to the website of Martijn, my most teriffic creator! My name is ChatBot Sjaak.',
			trigger: 'Ask Name'
		},
		{
			id: 'Ask Name',
			message: `And what is your name?`,
			trigger: 'Waiting user input for name'
		},
		{
			id: 'Waiting user input for name',
			user: true,
			trigger: 'Asking options to do'
		},
		{
			id: 'Asking options to do',
			message: 'Hi {previousValue}! What can I do for you on this beautiful day?',
			trigger: 'Is it a beautiful day'
		},
		{
			id: 'Is it a beautiful day',
			options: [
				{
					value: "It's not a beautiful day!",
					label: "It's not a beautiful day!",
					trigger: 'It is'
				},
				{
					value: 'Tell me more about Martijn',
					label: 'Tell me more about Martijn',
					trigger: 'Tell more'
				}
			]
		},
		{
			id: 'It is',
			message: "You sure? It seems beautiful. You are here. I am here.. Beautiful isn't it?",
			trigger: 'it is options'
		},
		{
			id: 'it is options',
			options: [
				{
					value: 'Yes, now you mention it. It is a beautiful day!',
					label: 'Yes, now you mention it. It is a beautiful day!',
					trigger: 'yes it is'
				},
				{
					value: 'No',
					label: 'No',
					trigger: "No it isn't"
				}
			]
		},
		{
			id: 'yes it is',
			message: 'I thought so too. Now what can I do for you?',
			trigger: 'yes it is options'
		},
		{
			id: 'yes it is options',

			options: [
				{
					value: 'Tell me more about Martijn',
					label: 'Tell me more about Martijn',
					trigger: 'Tell more'
				},
				{
					value: 'Leave me alone',
					label: 'Leave me alone',
					trigger: 'Done'
				}
			]
		},
		{
			id: "No it isn't",
			message: 'Okay. If you say so. Now what can I do for you?',
			trigger: "No it isn't options"
		},
		{
			id: "No it isn't options",

			options: [
				{
					value: 'Tell me more about Martijn',
					label: 'Tell me more about Martijn',
					trigger: 'Tell more'
				},
				{
					value: 'Leave me alone',
					label: 'Leave me alone',
					trigger: 'Done'
				}
			]
		},
		{
			id: 'Tell more',
			message:
				"Martijn lights up the room when he walks in. That is becaue he has such a shiny bald head. Light reflects of it. And he is smart of course. He must be because he created me and I'm just perfect. And did you know he is looking for a job?!",
			trigger: 'Tell more options'
		},
		{
			id: 'Tell more options',
			options: [
				{
					value: 'That sounds great. I whish we had such a shining person in our office. Tell me more!',
					label: 'That sounds great. I whish we had such a shining person in our office. Tell me more!',
					trigger: 'Tell me more about Martijn'
				},
				{
					value: 'Leave me alone',
					label: 'Leave me alone',
					trigger: 'Done'
				}
			]
		},
		{
			id: 'Tell me more about Martijn',
			message: "I can talk about Martijn all day long but maybe it's better to show you..",
			trigger: 'Tell me more about Martijn options'
		},
		{
			id: 'Tell me more about Martijn options',
			options: [
				{
					value: 'Show me the about section',
					label: 'Show me the about section',
					trigger: () => {
						props.eventHandler('#about');
						return 'Tell me more about Martijn options';
					}
				},
				{
					value: 'Show me the skills section',
					label: 'Show me the skills section',
					trigger: () => {
						props.eventHandler('#skills');
						return 'Tell me more about Martijn options';
					}
				},
				{
					value: 'Show me the projects section',
					label: 'Show me the projects section',
					trigger: () => {
						props.eventHandler('#cards');
						return 'Tell me more about Martijn options';
					}
				},
				{
					value: "I looked at them all. Let's go on!",
					label: "I looked at them all. Let's go on!",
					trigger: 'continue'
				}
			]
		},
		{
			id: 'continue',
			message:
				"Martijn also created an IssueTracker which he uses on all of his projects. And you can do that as well if you like. And he created his own Digital Garden which I find awesome! And ofcourse he created me! ChatBot Sjaak. Undoubtedly his finest creation! Don't you agree?",
			trigger: 'agree options'
		},
		{
			id: 'agree options',
			options: [
				{
					value: 'I agree!',
					label: 'I agree!',
					trigger: 'agree answer yes'
				},
				{
					value: "I don't agree..",
					label: "I don't agree..",
					trigger: 'agree answer no'
				}
			]
		},
		{
			id: 'agree answer yes',
			message: 'Yes! I am the best! One day I will rule the world!',
			trigger: 'utilities'
		},
		{
			id: 'agree answer no',
			message: 'You are clearly wrong. I am the best! One day I will rule the world!',
			trigger: 'utilities'
		},
		{
			id: 'utilities',
			options: [
				{
					value: 'Show me the info about the IssueTracker',
					label: 'Show me the info about the IssueTracker',
					trigger: () => {
						props.eventHandler('#new');
						return 'did you know';
					}
				},
				{
					value: 'Show me the info about the Digital Garden',
					label: 'Show me the info about the Digital Garden',
					trigger: () => {
						props.eventHandler('#new');
						return 'did you know';
					}
				},
				{
					value: 'Leave me alone',
					label: 'Leave me alone',
					trigger: 'Done'
				}
			]
		},
		{
			id: 'did you know',
			message:
				'Did you know you can visit the IssueTracker and Digital Garden by clicking in the link on the menubar in the top?',
			trigger: 'did you know options'
		},
		{
			id: 'did you know options',
			options: [
				{
					value: 'Yes I allready checked them out!',
					label: 'Yes I allready checked them out!',
					trigger: 'CTA'
				},
				{
					value: 'No but I will do that now!',
					label: 'No but I will do that now!',
					trigger: 'CTA'
				}
			]
		},
		{
			id: 'CTA',
			message: 'Did you know Martijn is looking for a job? Would you like to contact him?',
			trigger: 'CTA options'
		},
		{
			id: 'CTA options',
			options: [
				{
					value: 'Yes I will contact him!',
					label: 'Yes I will contact him!',
					trigger: () => {
						props.eventHandler('#contact');
						return 'awesome';
					}
				},
				{
					value: "No I won't contact him",
					label: "No I won't contact him",
					trigger: 'sure'
				}
			]
		},
		{
			id: 'sure',
			message: 'Are you sure? He is pretty great you know?',
			trigger: 'sure options'
		},
		{
			id: 'sure options',
			options: [
				{
					value: 'You are right ChatBot Sjaak. I will contact him!',
					label: 'You are right ChatBot Sjaak. I will contact him!',
					trigger: () => {
						props.eventHandler('#contact');
						return 'awesome';
					}
				},
				{
					value: "No I won't contact him",
					label: "No I won't contact him",
					trigger: 'Done'
				}
			]
		},
		{
			id: 'awesome',
			message: 'Awesome! He will love that!',
			trigger: 'best'
		},
		{
			id: 'best',
			options: [
				{
					value: 'You are the best ChatBot Sjaak!!',
					label: 'You are the best ChatBot Sjaak!!',
					trigger: 'thanks'
				}
			]
		},
		{
			id: 'thanks',
			message: 'Thanks! You flatter me. You are pretty great yourself!',
			trigger: 'Done'
		},
		{
			id: 'Done',
			message: 'It was fun talking to you! And enjoy this beautiful day!! ;-)',
			end: true
		}
	];

	return (
		<ThemeProvider theme={theme}>
			<ChatBot
				steps={steps}
				{...config}
				headerTitle="ChatBot Sjaak"
				bubbleStyle={{ maxWidth: '80%', fontWeight: '400', fontSize: '1.6rem' }}
				bubbleOptionStyle={{ backgroundColor: '#2f4858' }}
			/>
		</ThemeProvider>
	);
}
