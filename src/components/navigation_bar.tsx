import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEventHandler, useState } from "react";
import { Drawer, List, ListItemButton, PaletteMode, Divider, Tabs, Tab, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

export function NavigationBar(props: { setModeFunc: MouseEventHandler<HTMLElement>; mode: PaletteMode }) {

  const pages = {
    "Overview":"/",
    "Education":"/education",
    "Experience":"/experience",
    "Projects":"/projects",
    "Skills":"/skills",
  }

  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState(Object.entries(pages)[0][0]);
  const [tabValue, setTabValue] = useState(Object.entries(pages)[0][0]);

  
  // drawer actions
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const onItemClick = (title: string) => () => {
    setTitle(title);
    setTabValue(title);
    // setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  // toolbar actions
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTitle(newValue);
    setTabValue(newValue);
  };



  {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mohammad Al-Hajj
          </Typography>
          <Typography>
            <Link to={"/"} title="Overview">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Overview
              </Typography>
            </Link>
          </Typography>

          <Link to={"/"} title="Overview">
            Overview
          </Link>
          <Link to={"/education"} title="Education">
            Education
          </Link>
          <Link to={"/experience"} title="Experience">
            Experience
          </Link>
          <Link to={"/projects"} title="Projects">
            Projects
          </Link>
          <Link to={"/skills"} title="Skills">
            Skills
          </Link>
          <Button color="inherit" onClick={props.setModeFunc}>
            {props.mode === "dark" && <LightModeIcon />}
            {props.mode === "light" && <DarkModeIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box> */}


  // const useStyles = makeStyles((theme:any) => ({
  //   navlinks: {
  //     marginLeft: theme.spacing(10),
  //     display: "flex",
  //   },
  //   logo: {
  //     flexGrow: "1",
  //     cursor: "pointer",
  //   },
  //   link: {
  //     textDecoration: "none",
  //     color: "white",
  //     fontSize: "20px",
  //     marginLeft: theme.spacing(20),
  //     "&:hover": {
  //       color: "yellow",
  //       borderBottom: "1px solid white",
  //     },
  //   },
  // }));

  // const classes = useStyles();

  const MyToolbar = // withStyles(styles)(
    (propsTB:{ classes?:any, title:string, onMenuClick:any }) => (
      // <Fragment>
      // <AppBar className={classes.aboveDrawer}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={onMenuClick}> */}
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} aria-label="Menu" onClick={propsTB.onMenuClick}>
            <MenuIcon  sx={{ mr: 2 }}/>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography variant="h6" color="inherit">Mohammad Al-Hajj</Typography> 
          </IconButton>
          <Divider/>

          {/* <Typography variant="h6" color="inherit">
            {propsTB.title}
          </Typography> */}
          <CssBaseline />

          <Tabs 
          color="inherit"
            value={tabValue}
            onChange={handleTabChange}
            aria-label="Navigation"
            // indicatorColor="primary"
            textColor="inherit"
          >      
          {Object.entries(pages).map(([key, value], index) =>
            <Tab label={key} value={key} component={Link} to={value} color="inherit" />
            // <Link to={value} >
            //   <Button variant="contained" style={{padding:'1.35em'}}>{key}</Button>
            //   <Divider orientation="vertical" variant="middle" flexItem /> 
            // </Link>
          )}
        </Tabs>
        
        <Button color="inherit" onClick={props.setModeFunc} style={{height:"100"}}>
          {props.mode === "dark" && <LightModeIcon />}
          {props.mode === "light" && <DarkModeIcon />}
        </Button>
        </Toolbar>

      </AppBar>
     </Box>
      //   <div className={classes.toolbarMargin} />
      // </Fragment>
    );
  //);

  const MyDrawer = // withStyles(styles)(
    (props :{ classes?:any, variant?:any, open:any, onClose:any, onItemClick:any }) => 
    {

    
    
      // const useStyles = makeStyles((theme?: any) => ({
      //   paper: {
      //     width: 250
      //   }
      // }));
      // console.log(useStyles);
      
      // const classes = useStyles();
      // <Router history={history}>
      return (
        <Drawer
          // classes={{paper: classes.paper}}
          style={{
            // position: "relative",
            minWidth: 480
          }}
          variant={props.variant}
          open={props.open}
          onClose={props.onClose}
          // classes={{
          //   paper: classes.drawerPaper,
          // }}
        >
          <div
            // className={clsx({
            //   [classes.toolbarMargin]: variant === "persistent",
            // })}
          />
          <List>
            {Object.entries(pages).map(([key, value], index) => 
              <ListItemButton component={Link} to={value} onClick={onItemClick(key)}>{key}</ListItemButton>
            )}
          </List>
        </Drawer>
        // <main className={classes.content}>
        //   <Route exact path="/" component={Home} />
        //   <Route path="/grid" component={Grid} />
        // </main>
      // </Router>
    );
  // );
  }

  return (
    // <div className={classes.root}>
    <div >
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      {/* <MyDrawer open={drawer} onClose={toggleDrawer} onItemClick={onItemClick} variant={variant} /> */}
      <MyDrawer open={drawer} onClose={toggleDrawer} onItemClick={onItemClick}/>
    </div>
  );

  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //           Mohammad Al-Hajj
  //         </Typography>
  //         <Typography>
  //           <Link to={"/"} title="Overview">
  //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //               Overview
  //             </Typography>
  //           </Link>
  //         </Typography>

  //         <Link to={"/"} title="Overview">
  //           Overview
  //         </Link>
  //         <Link to={"/education"} title="Education">
  //           Education
  //         </Link>
  //         <Link to={"/experience"} title="Experience">
  //           Experience
  //         </Link>
  //         <Link to={"/projects"} title="Projects">
  //           Projects
  //         </Link>
  //         <Link to={"/skills"} title="Skills">
  //           Skills
  //         </Link>
  //         <Button color="inherit" onClick={props.setModeFunc}>
  //           {props.mode === "dark" && <LightModeIcon />}
  //           {props.mode === "light" && <DarkModeIcon />}
  //         </Button>
  //       </Toolbar>
  //     </AppBar>
  //   </Box>
  // );
}
