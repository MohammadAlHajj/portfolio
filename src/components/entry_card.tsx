// import { Button, Card, Modal } from "@mui/material";
import { Box, Card, CardActionArea, CardMedia, Modal, useTheme } from "@mui/material";
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
  accentColorLight?: string;
  accentColorDark?: string;
  items: string[];
  imageSqr: string;
  imageV: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();

  const landView = (
    <ExpData
      name={props.name}
      location={props.location}
      date={props.date}
      title={props.title}
      body={props.body}
      bulletPointColor={theme.palette.mode === "dark" ? props.accentColorDark : props.accentColorLight}
      items={props.items}
      image={props.imageSqr}
    />
  );

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 1,
    mb: 2,
    width: isPortrait() ? "90%" : "55%",
    maxHeight: isPortrait() ? "80%" : null,
    overflowY: "scroll",
    display: "flex",
  };

  return (
    <>
      <Card
        elevation={8}
        className="m-1 d-flex"
        style={{
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
            style={{
              margin: 0,
              padding: 0,
              objectFit: "contain",
            }}
            image={props.imageV ?? "holder.js/185x300"}
          />
        </CardActionArea>
      </Card>
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
        <Box sx={style}>{landView}</Box>
      </Modal>
    </>
  );
}
