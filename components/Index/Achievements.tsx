import { CardGrid } from 'components/CardGrid/CardGrid';
import { Card } from 'components/CardGrid/Card';
//import { linkClasses } from 'components/styles';

export const Achievements = () => (
	<CardGrid>
		<Card title="Student Volunteer" tags={['Team Building', 'Teaching']}>
			Helped set up book stalls to share teachings on self-realization and inner peace.
			Worked with volunteers to distribute literature and raise awareness about living
			in harmony with oneself and the world. Spread awareness about climate change,
			highlighting our connection to everything. Focused on teamwork, selfless service,
			and supporting both spiritual and environmental growth.
		</Card>
		<Card title="Dean's List" tags={['Gen AI', 'Machine Learning', 'Statistic']}>
			Consistently honored on the prestigious Dean’s List in 2021 and 2022, embodying academic excellence and drive.
		</Card>
	</CardGrid>
);
