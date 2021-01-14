import React from "react";
import * as bs from "react-bootstrap";
import Site from "..";

import eduImg from "../assets/AUB_banner_done.jpg";
import projectsImg from "../assets/AUB_banner_done.jpg";

export default class Overview extends React.Component {
	render() {
		var carousels = [
			[
				Site.overview,
				"A dedicated and persistent candidate seeking a full-time or part-time job.",
				"holder.js/800x494?text= &bg=373940",
			],
			[Site.education, "Graduate of the prestigious American University of Beirut", eduImg],
			[Site.projects, "An assortment of wide ranging projects covered", projectsImg],
		];
		return (
			<bs.Container>
				<bs.Carousel>
					{carousels.map((item, i) => (
						<bs.Carousel.Item key={i} onClick={() => this.props.changeTab(item[0])}>
							{/* <img src="holder.js/800x400?text= &bg=373940" /> */}
							<bs.Image width={800} src={item[2]} fluid/>
							<bs.Carousel.Caption>
								<h4>{item[0]}</h4>
								<p>{item[1]}</p>
							</bs.Carousel.Caption>
						</bs.Carousel.Item>
					))}
				</bs.Carousel>
			</bs.Container>
		);
	}
}
