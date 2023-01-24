import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { NavigationBar } from "components/navigation_bar";
import { useState } from "react";
import { Col, Container} from "react-bootstrap";
// import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import { Outlet, useNavigation } from "react-router-dom";
// import { blue } from "@mui/material/colors";
export default function Root() {
  const navigation = useNavigation();

    // const [mode, setMode] = useState<PaletteMode>("dark")
    const [mode, setMode] = useState<PaletteMode>("dark");
    const darkTheme = createTheme({
      palette: {
      //   primary:blue,
        // primary: {
          // light: "#42c2f5",
          // main: "rgba(0,0,0.5,0.5)",
        //   // dark: "#778899",
        //   contrastText: "#fff"
        // },
        mode: mode,
      },
    });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Col className="d-flex flex-column mh-full-page">
        <NavigationBar setModeFunc={()=>{mode==="dark"?setMode("light"):setMode("dark")}} mode={mode}/>
        <Container id="detail" className={(navigation.state === "loading" ? "loading" : "") + " flex-fill"}>
          <Outlet />
        </Container>
      </Col>
    </ThemeProvider>
  );
}