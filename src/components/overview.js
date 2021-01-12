import React from "react";
import * as bs from "react-bootstrap";
import Site from "..";

export default class Overview extends React.Component {
	render() {
		var carousels = [
			[
				Site.overview,
				"A dedicated and persistent candidate seeking a full-time or part-time job.",
			],
			[Site.education, "Graduate of the prestigious American University of Beirut"],
			[Site.projects, "An assortment of wide ranging projects covered"],
		];
		return (
			<bs.Container>
				<bs.Carousel>
					{carousels.map((item, i) => (
						<bs.Carousel.Item key={i} onClick={() => this.props.changeTab(item[0])}>
							<img src="holder.js/800x400?text= &bg=373940" />
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
