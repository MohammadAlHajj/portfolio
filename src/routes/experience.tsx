import hajjEngEstCardImg from "assets/Hajj_Eng_Est_logo_v.png";
import hajjEngEstSqrImg from "assets/Hajj_Eng_Est_logo.png";

import fadelCardImg from "assets/Fadel_card (185x300).png";
import fadelSqrImg from "assets/Fadel_logo.png";

import yanstraCardImg from "assets/yanstra_card.png";
import yanstraSqrImg from "assets/yanstra_logo.png";

// import interactiveLifeCardImg from "assets/interactive_life_card.png";
// import interactiveLifeSqrImg from "assets/interactive_life_logo.png";
import interactiveLifeCardImg from "assets/interactive_life_card1.webp";
import interactiveLifeSqrImg from "assets/Interactive_life_Logo1.webp";

import netvariantCardImg from "assets/netvariant_logo_fill.webp";
import netvariantSqrImg from "assets/netvariant_logo_fill.webp";

import { Row } from "react-bootstrap";
import { Desktop, isMobile, Mobile } from "components/helpers/MediaQueryHelpers";
import { PlayingCard } from "components/entry_card";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import { Container, useTheme } from "@mui/material";
// import bgImg from "../assets/images/bg1.jpg"

export function Experience() {
  const ExpList = (justifyCenter: boolean = true) => {
    let className = justifyCenter ? "justify-content-center " : "";

    interface ExpData {
      key: any;
      name: string;
      imageV: any;
      imageSqr: any;
      accentColorLight: string;
      accentColorDark: string;
      location: string;
      date: string;
      title: string;
      items: string[];
    }
    var expData: ExpData[] = [
      {
        key: 5,
        name: "Netvariant",
        imageV:  netvariantCardImg,
        imageSqr:  netvariantSqrImg,
        accentColorLight: "#c8e153",
        accentColorDark: "#adc348",
        location: "Lebanon",
        date: "4/2021 - 6/2022",
        title: "Senior Backend Developer",
        items: [
          "Lead the company’s ERP Human Resources project team.",
          "Built the backend of a religious app project from scratch. My knowledge in mobile development and the project field made for seamless API integration and a 30% decrease in development time.",
          "Implemented Microsoft LDAP integration into Moqui Framework.",
          "Researched and pushed for the move to programming alternatives for better quality and higher productivity including test driven development (TDD), Functional Programming, Kotlin, and Lomboc.",
        ],
      },
      {
        key:1,
        name:"Yanstra",
        imageV:yanstraCardImg,
        imageSqr:yanstraSqrImg,
        accentColorLight:"#eb292b",
        accentColorDark:"#eb292b",
        location:"Switzerland",
        date:"9/2020 - Present",
        title:"Mobile Developer (Contract)",
        items:[
          "Migrate website to Android and IOS mobile platforms using Google’s Flutter",
          "Construct all app features such as assets, animations, UI, graphs, and Api management",
          "Coordinate with the backend team",
        ]
      },
      {
        key:2,
        name:"Hajj Engineering Establishment",
        imageV:hajjEngEstCardImg,
        imageSqr:hajjEngEstSqrImg,
        accentColorLight:"#72b6d2",
        accentColorDark:"#dac549",
        location:"Lebanon",
        date:"10/2016  – 9/2020",
        title:"Project Manager",
        items:[
          "Providing company-wide IT support and maintenance",
          "Managing and supervising multiple projects ranging from industrial products to construction projects",
          "Delegating responsibilities and creating/applying schedules with up to 22 people in 6 different teams",
          "Representing Establishment in Quality Assurance with consultants, and in meetings with 3rd parties (Army, UNDP, Internal Security Forces, and private companies)",
          "Overseeing and providing pay for different entities ranging from contractors  to single workers",
        ]
      },
      {
        key:3,
        name:"Interactive Life",
        imageV:interactiveLifeCardImg,
        imageSqr:interactiveLifeSqrImg,
        accentColorLight:"#a255c2",
        accentColorDark:"#a255c2",
        location:"Lebanon",
        date:"3/2016 – 10/2016",
        title:"Android Developer",
        items:[
          "Constructed front end components (Programming, UI, animations, UX)",
          "Constructed boilerplate modules needed for the creation of the android front end. These modules were the selling point of the android side of the project",
          "Participated in meetings concerning UX, business logic, and fullstack separation and interaction,",
        ]
      },
      {
        key:4,
        name:"Fadel SAL",
        imageV:fadelCardImg,
        imageSqr:fadelSqrImg,
        accentColorLight:"#5d9ad3",
        accentColorDark:"#5d9ad3",
        location:"Lebanon",
        date:"9/2016 – 12/2016",
        title:"Junior Developer",
        items:[
          "Used MVC model to create multiple small fullstack web pages",
          "Used Oracle Database to store the data",
          "Used Hibernate as ORM to link the database to the web pages",
        ]
      }
    ];

    var theme = useTheme();
    return (
      isMobile()
      ?(
        <Row className={className}>
          {expData.map((item) => (
          <PlayingCard 
            key={item.key}
            name={item.name}
            imageV={item.imageV}
            imageSqr={item.imageSqr}
            accentColorLight={item.accentColorLight}
            accentColorDark={item.accentColorDark}
            location={item.location}
            date={item.date}
            title={item.title}
            items={item.items}
          />))}
        </Row>
      )
      :<Timeline position={isMobile()?"right":"alternate"}>
        {expData.map((item, i) => (
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2">
              <Typography >{item.name}</Typography>
              <Typography color="text.secondary">{item.date}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{backgroundColor:theme.palette.mode === "dark" ? "#5558" : "#CCC8" }}>
                <WorkIcon htmlColor={theme.palette.mode === "dark" ? item.accentColorDark: item.accentColorLight}/>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: "2" }}>
              <Container className={`${isMobile()? "" : "d-flex " + (i%2===1? "justify-content-end":"justify-content-start")}`}>
              <PlayingCard 
                key={item.key}
                name={item.name}
                imageV={item.imageV}
                imageSqr={item.imageSqr}
                accentColorLight={item.accentColorLight}
                accentColorDark={item.accentColorDark}
                location={item.location}
                date={item.date}
                title={item.title}
                items={item.items}
              />
              </Container>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    );
  };

  return (
    <>
      <h3>Experience</h3>
      <hr />
      <Desktop>{ExpList(false)}</Desktop>
      {/* <Tablet>{ExpList()}</Tablet> */}
      <Mobile>{ExpList()}</Mobile>
    </>
  );
}
