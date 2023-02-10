import { Container, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Col, Image, Row } from "react-bootstrap";
import { isMobile, isPortrait } from "./helpers/MediaQueryHelpers";
import ListIcon from '@mui/icons-material/TaskAlt';

export function Entry(props: {
  name: string;
  location: string;
  date: string;
  title: string;
  bulletPointColor?: string;
  body?: string;
  items?: string[];
  image: string;
}) {

  return (
    <Container>
      {/* <Row xs={12} md={2}> JAD this was the issue */}
      <Row>
        <Col xs={12} sm={4} className="p-3 d-inline-flex justify-content-center">
          <Image
            src={props.image}
            style={{
              width: isMobile() && isPortrait() ? "100%" : undefined,
              padding: isMobile() && isPortrait() ? "0.5em 2em 0.5em 2em" : undefined,
              objectFit: "contain",
            }}
            fluid
          />
        </Col>
        <Col xs={12} sm={8}>
            <Row xs={1} sm={3} className="pb-3">
              <Col xs={12} sm={5} children={<strong>{props.name}</strong>} />
              <Col xs={12} sm={3} children={props.location} />
              <Col xs={12} sm={4} children={props.date} />
            </Row>
            {props.title ? <p><u>{props.title}</u></p> : null}
            {props.body ? <Container>{props.body}</Container> : null}
            {props.items ? (
              <List sx={{
                overflow:  !(isMobile() && isPortrait()) ? 'auto': undefined,
                maxHeight: !(isMobile() && isPortrait()) ?  300: undefined,
              }} dense>
                {props.items.map((item) => (
                  <ListItem key={item} >
                    <ListItemIcon><ListIcon fontSize="small"  htmlColor={props.bulletPointColor ?? 'gray'}/></ListItemIcon>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            ) : null}
        </Col>
      </Row>
    </Container>
  );
}
