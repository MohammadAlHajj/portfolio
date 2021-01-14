import React, { Component } from "react";
import * as bs from "react-bootstrap";
import EntryCard from "./entry_card";

import hajjEngEstCardImg from '../assets/Hajj_Eng_Est_logo_v.png';
import hajjEngEstSqrImg from '../assets/Hajj_Eng_Est_logo.png';

import fadelCardImg from '../assets/Fadel_card (185x300).png';
import fadelSqrImg from '../assets/Fadel_logo.png';

import yanstraCardImg from '../assets/yanstra_card.png';
import yanstraSqrImg from '../assets/yanstra_logo.png';

import interactiveLifeCardImg from '../assets/interactive_life_card.png';
import interactiveLifeSqrImg from '../assets/interactive_life_logo.png';

export default class Experience extends Component {
	render() {
		return (
			<bs.Container>
				<h3>Experience</h3>
				<hr />
				<bs.CardDeck >
					<EntryCard
						name="Yanstra"
						imageV={yanstraCardImg}
						imageSqr={yanstraSqrImg}
						location="Switzerland"
						date="9/2020 - Present"
						title="Mobile Developer (Contract)"
						items={[
							"Migrate website to Android and IOS mobile platforms using Google’s Flutter",
							"Construct all app features such as assets, animations, UI, graphs, and Api management",
							"Coordinate with the backend team",
						]}
					/>
					<EntryCard
						name="Hajj Engineering Establishment"
						imageV={hajjEngEstCardImg}
						imageSqr={hajjEngEstSqrImg}
						location="Lebanon"
						date="10/2016  – 9/2020"
						title="Project Manager"
						items={[
							"Providing company-wide IT support and maintenance",
							"Managing and supervising multiple projects ranging from industrial products to construction projects",
							"Delegating responsibilities and creating/applying schedules with up to 22 people in 6 different teams",
							"Representing Establishment in Quality Assurance with consultants, and in meetings with 3rd parties (Army, UNDP, Internal Security Forces, and private companies)",
							"Overseeing and providing pay for different entities ranging from contractors  to single workers",
						]}
					/>
					<EntryCard
						name="Interactive Life"
						imageV={interactiveLifeCardImg}
						imageSqr={interactiveLifeSqrImg}
						location="Lebanon"
						date="3/2016 – 10/2016"
						title="Android Developer"
						items={[
							"Constructed front end components (Programming, UI, animations, UX)",
							"Constructed boilerplate modules needed for the creation of the android front end. These modules were the selling point of the android side of the project",
							"Participated in meetings concerning UX, business logic, and fullstack separation and interaction,",
						]}
					/>
					<EntryCard
						name="Fadel SAL"
						imageV={fadelCardImg}
						imageSqr={fadelSqrImg}
						location="Lebanon"
						date="9/2016 – 12/2016"
						title="Junior Developer"
						items={[
							"Used MVC model to create multiple small fullstack web pages",
							"Used Oracle Database to store the data",
							"Used Hibernate as ORM to link the database to the web pages",
						]}
					/>
				</bs.CardDeck>
			</bs.Container>
		);
	}
}
