import React, { Component } from "react";
import Entry from "./entry";
export default class Experience extends Component {
  render() {
    return (
      <div>
        <h3>Experience</h3>
        <hr />

        <Entry
          name="Yanstra"
          location="Switzerland"
          date="9/2020 - Present"
          title="Mobile Developer (Contract)"
          items={[
            "Migrate website to Android and IOS mobile platforms using Google’s Flutter",
            "Construct all app features such as assets, animations, UI, graphs, and Api management",
            "Coordinate with the backend team",
          ]}
        />
        <Entry
          name="Hajj Engineering Establishment"
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
        <Entry
          name="Interactive Life"
          location="Lebanon"
          date="3/2016 – 10/2016"
          title="Android Developer"
          items={[
            "Constructed front end components (Programming, UI, animations, UX)",
            "Constructed boilerplate modules needed for the creation of the android front end. These modules were the selling point of the android side of the project",
            "Participated in meetings concerning UX, business logic, and fullstack separation and interaction,",
          ]}
        />
        <Entry
          name="Fadel SAL"
          location="Lebanon"
          date="9/2016 – 12/2016"
          title="Junior Developer"
          items={[
            "Used MVC model to create multiple small fullstack web pages",
            "Used Oracle Database to store the data",
            "Used Hibernate as ORM to link the database to the web pages",
          ]}
        />
      </div>
    );
  }
}
