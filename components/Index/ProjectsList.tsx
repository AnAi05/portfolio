import { Card } from 'components/CardGrid/Card';
import { CardGrid } from 'components/CardGrid/CardGrid';

export const ProjectsList = () => (
	<CardGrid>
		<Card
			title="Anomaly Detection and Event Prediction in Sensor Networks"
			link="https://github.com/AnAi05/Anomaly-Detection-and-Event-Prediction-in-sensor-networks"
			tags={['Keras', 'Pandas', 'Python', 'Seaborn']}
		>
			Our client, a leading provider of innovative sensor network solutions, aims to
			revolutionize sensor network technology. This project focuses on developing an
			Anomaly Detection and Event Prediction system for sensor networks. The goal is
			to create a system capable of detecting anomalies and predicting events in real-time,
			enabling proactive responses to potential issues, and significantly enhancing
			monitoring capabilities within sensor networks.
		</Card>
		<Card
			title="Heart Disease Prediction"
			link="https://github.com/AnAi05/Heart-Disease-Prediction"
			tags={['Keras', 'Pandas', 'Python', 'Seaborn']}
		>
			The primary objective of this project is to build and evaluate machine learning
			models for predicting the presence of heart disease based on a given set
			of features such as age, sex, blood pressure, cholesterol levels, and other
			relevant medical data. The goal is to achieve high accuracy while prioritizing
			sensitivity to minimize the risk of misdiagnosing individuals with heart disease.
		</Card>
		<Card
			title="Salary Range Prediction"
			link="https://github.com/AnAi05/Salary-Range-Prediction"
			tags={['Keras', 'Matplotlib', 'Pandas', 'Python', 'Seaborn']}
		>
			Develop a machine learning algorithm to forecast salary ranges for job
			listings based on title, category, and location. This model will align
			postings with market standards, attract top talent, and support HR in
			budget planning. Ensure high accuracy, scalability, and provide detailed
			documentation for future reference.
		</Card>
		{/* <Card
			title="Realtime IDE"
			link="https://github.com/cpinitiative/ide"
			tags={['React', 'Firebase', 'CRDT']}
		>
			A realtime collaborative IDE with code execution and input/output, designed for competitive
			programming and USACO.
		</Card>
		<Card
			title="Serverless Online Judge"
			link="https://github.com/cpinitiative/online-judge-rust"
			tags={['AWS Lambda', 'Rust']}
		>
			A serverless code execution system built with AWS Lambda and Rust that supports C++, Java, and
			Python.
		</Card> */}
		<Card
			title="Personal Website"
			link="https://github.com/AnAi05/new-portfolio"
			tags={['React', 'Node.js']}
		>
			This site! Built with HTML/CSS, React, Node.js.
		</Card>
		{/* <Card title="AP Physics C Practice" link="https://apc-practice.vercel.app/" tags={['Svelte']}>
			AP Physics C Mechanics & E&M practice questions, scraped from CollegeBoard.
		</Card>
		<Card title="Party Games" link="/games" tags={['Miscellaneous']}>
			A collection of my favorite party games.
		</Card> */}
	</CardGrid>
);
