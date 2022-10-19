import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import Education from "./components/education";
import Experience from "./components/experience";
import Overview from "./components/overview";
import Projects from "./components/projects";
import Skills from "./components/skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "holderjs";

// import bgImg0 from "./assets/images/bg1.jpg";
// import bgImg1 from "./assets/images/bg2.jpg";
// import bgImg2 from "./assets/images/bg3.jpg";
// import bgImg3 from "./assets/images/bg4.jpg";
// import bgImg4 from "./assets/images/bg5.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, EffectCoverflow, Controller} from 'swiper';
import 'swiper/css/bundle';

export default class Site extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeKey: Site.overview };
  }
  render() {


    return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, EffectCoverflow, Controller]}
			style={{ backgroundColor: '#28292a'}}
			spaceBetween={50}
			slidesPerView={1}
			autoHeight
			navigation
			effect="coverflow"
			grabCursor
			rewind
			keyboard
			// direction="vertical"
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide className="mh-full-page" ><Overview changeTab={this.changeTab} /></SwiperSlide>
			<SwiperSlide className="mh-full-page" ><Education changeTab={this.changeTab} /></SwiperSlide>
			<SwiperSlide className="mh-full-page" ><Experience changeTab={this.changeTab} /></SwiperSlide>
			<SwiperSlide className="mh-full-page" ><Projects changeTab={this.changeTab} /></SwiperSlide>
			<SwiperSlide className="mh-full-page" ><Skills changeTab={this.changeTab} /></SwiperSlide>
		</Swiper>
		// style={{ backgroundImage: `url(${bgImg0})`}}
		// style={{ backgroundImage: `url(${bgImg1})`}}
		// style={{ backgroundImage: `url(${bgImg2})`}}
		// style={{ backgroundImage: `url(${bgImg3})`}}
		// style={{ backgroundImage: `url(${bgImg4})`}}
    );
  }

  changeTab = (key) => this.setState({ activeKey: key });
}

// ========================================

// ReactDOM.render(<Site  className="Site" />, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Site className="Site" />);
