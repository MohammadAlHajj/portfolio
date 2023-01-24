// import { Button, Card, Modal } from "@mui/material";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
// import { CardImg, ListGroup, ListGroupItem } from "react-bootstrap";
import { Entry as ExpData } from "./entry";
import { isPortrait } from "./helpers/MediaQueryHelpers";



export function PlayingCard(props: {
  name: string;
  location: string;
  date: string;
  title: string;
  body?: string;
  items: string[];
  imageSqr: string;
  imageV: string;
}) {
  const [showModal, setShowModal] = useState(false);

  const createEntryOverlay = () => {
    // const portView = (
    //   // <Card className="translucent" bg="dark">

    //   <Card>
    //     <CardHeader>{props.name}</CardHeader>
    //     <CardMedia
    //       component="img"
    //       // variant="top"
    //       // fluid
    //       image={props.imageSqr ? props.imageSqr : "holder.js/185x185"}
    //     ></CardMedia>
    //     <CardContent>
    //       <Card>{props.location}</Card>
    //       <Typography>{props.date}</Typography>
    //       {props.title ? <Typography>{props.title}</Typography> : <></>}
    //       {props.body ? <Typography>{props.body}</Typography> : <></>}
    //       {props.items ? (
    //         <List>
    //           {props.items.map((item) => (
    //             <ListItem key={item}>
    //               <ListItemText>{item}</ListItemText>
    //             </ListItem>
    //           ))}
    //         </List>
    //       ) : (
    //         <></>
    //       )}
    //     </CardContent>
    //   </Card>
    // );

    const landView = (
      <ExpData
        name={props.name ?? null}
        location={props.location ?? null}
        date={props.date ?? null}
        title={props.title ?? null}
        body={props.body}
        items={props.items ?? null}
        image={props.imageSqr ?? null}
      />
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const isPortrait = useMediaQuery({ orientation: "portrait" });

    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 1,
      mb: 2,
      width: isPortrait()  ? "90%": "55%",
      maxHeight: isPortrait() ? '80%': null,
      overflowY: "scroll",
      display:"flex"
    };

    return (
        <Modal
          // sx={{overflowY: 'scroll'}}
          // disableScrollLock={false}
          // content
          // ClassName="translucent"
          // size="xl"
          // centered
          
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          open={showModal}
          onClose={() => setShowModal(false)}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          {/* {landView} */}
          {/* <Slide direction="up" in={showModal} mountOnEnter unmountOnExit> */}
            <Box sx={style}>
              {landView}
              {/* <LandscapeMode>{landView}</LandscapeMode>
          <PortraitMode>{portView}</PortraitMode> */}
            </Box>
          {/* </Slide> */}
        </Modal>
    );
  };

  return (
    <>
      {/* <Button 
        className="m-1"  
        variant="link" onClick={() => setShowModal(true)}
        style={{
        width: 185,
        height: 300,
        padding: 0,
        margin:0,
      }}> */}
      <Card
        className="m-1"
        style={{
          // background: "#BBBA",
          width: 185,
          height: 300,
          padding: 0,
          border: 0,
          margin: 0,
        }}
      >
        <CardActionArea onClick={() => setShowModal(true)}>
          <CardMedia
            component="img"
            // variant="top"
            style={{
              margin: 0,
              padding: 0,
            }}
            image={props.imageV ?? "holder.js/185x300"}
          />
        </CardActionArea>
      </Card>
      {/* </Button> */}
      {createEntryOverlay()}
    </>
  );
}
