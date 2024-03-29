import React, { Component } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { SkillBar, SkillBarColor } from "react-skillbars";
// import {useImage} from 'react-image'

function makeExpCard(
  title?: any,
  name?: any,
  width?: any,
  height?: any,
  isInSrc: any = false,
  original: any = true,
  wordmark: any = false,
  ext: any = "svg"
) {
  let path =
    process.env.PUBLIC_URL +
    ("/icons/" + name + "/") +
    (name + (original ? "-original" : "-plain") + (wordmark ? "-wordmark" : "") + "." + ext);
  if (isInSrc) path = process.env.PUBLIC_URL + "/icons/" + name + "." + ext;
  console.log(path);
  //   process.env.PUBLIC_URL +
  //   ("/icons/" + name + "/") +
  //   (name + "-plains" + (wordmark ? "-wordmark" : "") + "." + ext);
  // let tested = false;
  return (
    <Col key={name} className="translucent m-2 p-3" style={{ flex: 0 }}>
      <Image
        className="p-2"
        title={title}
        src={path}
        width={width}
        height={height}
        // onError={(e)=>changeSrc(e, path2) }
        // onError={(e) => {
        //   // if(!tested){
        //     // if(e.target.src == path2)
        //       // e.target.removeEventListener("error");
        //     console.log(e.currentTarget.onerror);
        //     console.log(e.currentTarget.src);
        //     e.currentTarget.onerror = null;
        //     e.currentTarget.src = path2;
        //     // tested = true;
        //     console.log("hi");
        //   // }
        // }}
        // onError={({ currentTarget }) => {
        //   currentTarget.onerror = null; // prevents looping
        //   currentTarget.src=path2;
        // }}
      />
    </Col>
  );
}
// function changeSrc(e, path2) {
//   console.log("hi");
//   console.log(e.target.onerror);
//   console.log(e.target.src);
//   // e.target.onerror = null;
//   e.target.src = path2;
// }

declare module "react-skillbars" {
  interface SkillBarColor {
    background: String;
    bar: {
      hue: number;
      saturation: {
        minimum: number;
        maximum: number;
      };
      level: {
        minimum: number;
        maximum: number;
      };
    };
    title: {
      text: {
        hue: number;
        saturation: {
          minimum: number;
          maximum: number;
        };
        level: {
          minimum: number;
          maximum: number;
        };
      };
      background: {
        hue: number;
        saturation: {
          minimum: number;
          maximum: number;
        };
        level: {
          minimum: number;
          maximum: number;
        };
      };
    };
  }
}
export default class Skills extends Component {
  render() {
    const langArr = [
      ["English", 5, 5, 5, 5],
      ["Arabic", 4, 3, 5, 5],
    ];
    const iconSize = 80;
    return (
      <Container>
        <Container className="d-flex justify-content-evenly">
          <h3>Skills</h3>
        </Container>
        <hr />
        {/* languages*/}
        <Row fluid="lg" className="d-flex justify-content-evenly">
          {/* each language */}
          {langArr.map((item, i) => {
            const skills = [
              { type: "Read", level: (item[1] as number) * 20 },
              { type: "Write", level: (item[2] as number) * 20 },
              { type: "Speak", level: (item[3] as number) * 20 },
              { type: "Listen", level: (item[4] as number) * 20 },
            ];

            const colors: SkillBarColor = {
              background: "#34be5b",
              bar: {
                hue: 137,
                saturation: {
                  minimum: 30,
                  maximum: 70,
                },
                level: {
                  minimum: 30,
                  maximum: 47,
                },
              },
              title: {
                text: {
                  hue: 137,
                  saturation: {
                    minimum: 30,
                    maximum: 70,
                  },
                  level: {
                    minimum: 80,
                    maximum: 100,
                  },
                },
                background: {
                  hue: 137,
                  saturation: {
                    minimum: 30,
                    maximum: 70,
                  },
                  level: {
                    minimum: 30,
                    maximum: 47,
                  },
                },
              },
            };

            return (
              <>
                <Col xs={12} md={5}>
                  <h3>{item[0]}</h3>
                  <SkillBar skills={skills} colors={colors} height="2.5vh" animationDuration={2000} />
                </Col>
                {/* <Desktop>{i !== langArr.length - 1 && <Col xs={0} md={2} />}</Desktop>
                <Tablet>{i !== langArr.length - 1 && <Col xs={0} md={2} />}</Tablet> */}
              </>
            );
          })}
        </Row>
        {/* languages*/}

        <hr />

        <Row>
          <Col>
            <Card style={{ background: "transparent" }}>
              <Card.Header>
                <h5>Core</h5>
              </Card.Header>

              <Card.Body>
                <Row className="d-flex justify-content-evenly">
                  {[
                    // languages
                    ["Java", "java"],
                    ["Dart", "dart", true],
                    ["SQL", "sql", true],
                    ["PL/SQL", "plsql", true],
                    ["Blueprints (Unreal Engine)", "unreal-engine-white", true, null, null, "png"],
                    // frameworks
                    ["Flutter", "flutter", true],
                    ["Android", "android"],
                    ["Moqui", "moqui", true],
                    ["JavaFX", "java-fx", true],
                    // Utils
                    ["Git", "git"],
                    ["Gradle", "gradle", null, false],
                    ["Intellij", "intellij"],
                    ["Postman", "postman", true],
                    ["Unreal Engine 4", "unreal-engine-white", true, null, null, "png"],
                    // OS
                    ["Linux", "linux"],
                    ["Windows", "windows", true],
                  ].map((item) => (
                    <>
                      {makeExpCard(item[0], item[1], iconSize, iconSize, item[2], item[3], item[4], item[5])}
                    </>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={0} md={1} className="d-flex justify-content-center">
            <div className="divider" />
          </Col>
          <Col>
            <Card style={{ background: "transparent" }}>
              <Card.Header>
                <h5>Honorable Mentions</h5>
              </Card.Header>
              <Card.Body>
                <Row className="d-flex justify-content-evenly">
                  {[
                    // languages
                    ["JavaScript", "javascript"],
                    ["Typecript", "typescript"],
                    ["Kotlin", "kotlin", true],
                    ["MongoDB", "mongodb"],
                    ["Python", "python"],
                    ["PHP", "php"],
                    ["C/C++", "cplusplus"],
                    ["Cucumber", "cucumber", null, false],
                    // frameworks
                    ["HTML", "html5"],
                    ["CSS", "css3"],
                    ["React", "react"],
                    ["Java Spring", "spring", true],
                    ["Hibernate", "hibernate", true],
                    ["Laravel", "laravel", null, false],
                    // Utils
                    ["Docker", "docker"],
                    ["Bash", "bash", true],
                    ["Jenkins", "jenkins", true],
                  ].map((item) => (
                    <>{makeExpCard(item[0], item[1], iconSize, iconSize, item[2], item[3], item[4])}</>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
