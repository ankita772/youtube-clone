import * as React from "react";
import bird from "../assets/bird.jpeg";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Link,
  CssBaseline,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Modal,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MicIcon from "@mui/icons-material/Mic";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import TranslateIcon from '@mui/icons-material/Translate';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

  
import {
  
}from '@mui/material';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PrimarySearchAppBar() {
  const [isSignin,setIsSignin]=React.useState(false);
  const [accountbarOpen,setAccountbarOpen]=React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const handleAccount=()=>{
  setAccountbarOpen(true);
}
const signIn=()=>{
setModalOpen(true);
 // setIsSignin(true);
}

const [values, setValues] = React.useState({
  email:'',
  password: '',
  showPassword: false,
});

const handlePassword = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};
const handleEmail = (prop) => (event) => {
 setValues({ ...values, [prop]: event.target.value });
 
};

const handleClickShowPassword = () => {
  setValues({
    ...values,
    showPassword: !values.showPassword,
  });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};


const handleMobileMenuClose = () => {
     setMobileMoreAnchorEl(null);
   };

const handleMobileMenuOpen = (event) => {
     setMobileMoreAnchorEl(event.currentTarget);
  };

const [leftbar, setLeftBar] = React.useState(false);

const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeftBar(isOpen);
};


const list = () => (
  <Box
    sx={{ width: 220 }}
    role="presentation"
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      <ListItem button key="Menubar">
        <ListItemIcon>
          <IconButton onClick={toggleDrawer(false)}>
            <MenuIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemIcon>
          <YouTubeIcon className="youtubeIcon" />
        </ListItemIcon>
        <ListItemText primary="YouTube" />
      </ListItem>
      <ListItem button key="Home">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button key="Explore">
        <ListItemIcon>
          <ExploreIcon />
        </ListItemIcon>
        <ListItemText primary="Explore" />
      </ListItem>
      <ListItem button key="Subscriptions">
        <ListItemIcon>
          <SubscriptionsIcon />
        </ListItemIcon>
        <ListItemText primary="Subscriptions" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button key="Library">
        <ListItemIcon>
          <VideoLibraryIcon />

        </ListItemIcon>
        <ListItemText primary="Library" />
      </ListItem>
      <ListItem button key="History">
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItem>
      <ListItem button key="Video">
        <ListItemIcon>
          <OndemandVideoIcon />
        </ListItemIcon>
        <ListItemText primary="Your video" />
      </ListItem>
      <ListItem button key="WatchLater">
        <ListItemIcon>
          <WatchLaterIcon />
        </ListItemIcon>

        <ListItemText primary="Watch later" />
      </ListItem>

      <ListItem button key="LikeVideos">
        <ListItemIcon>
          <ThumbUpAltIcon />
        </ListItemIcon>
        <ListItemText primary="Like videos" />
      </ListItem>
      <ListItem button key="ShowMore">
        <ListItemIcon>
          <KeyboardArrowDownIcon />
        </ListItemIcon>
        <ListItemText primary="Show more" />`
        
      </ListItem>
    </List>
  </Box>
);


const AccountList=()=>(
     <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <Drawer
          sx={{
             width: 280,
            flexShrink: 0,
             '& .MuiDrawer-paper': {
               width: 280,
              boxSizing: 'border-box',
             },
           }}
           variant="permanent"
           anchor="center"
         >
           <Toolbar>
            <IconButton>           
               <img src={bird} alt="greenBird" width="40" height="40" sx={{p:0}}/> 
            </IconButton>
              <Typography component="div">
                <Box sx={{ lineHeight:1,fontSize:12}}>Ankita Santra</Box>
                <Box sx={{ lineHeight:1,fontSize:10,mt:0.6,ml:0.3}}><Link href="#" underline="none">Manage your google account</Link></Box>
             </Typography>
             <IconButton sx={{ml:0.2}} onClick={()=>setAccountbarOpen(false)}>
               <CloseIcon/>
             </IconButton>
           </Toolbar> 
        
           <Divider />
             <List>
               <ListItem button key="YourChannel">
                 <ListItemIcon>
                   <AccountBoxOutlinedIcon/>
                 </ListItemIcon>
                 <ListItemText primary="Your channel" />
               </ListItem>

               <ListItem button key="Membership">
                 <ListItemIcon>
                 <MonetizationOnIcon/>
                 </ListItemIcon>
                 <ListItemText primary="Membership"/>
               </ListItem>

               <ListItem button key="SignOut">
                 <ListItemIcon>
                <LogoutIcon/>
                 </ListItemIcon>
                 <ListItemText primary="Sign Out"/>
               </ListItem>
           </List>
          <Divider />
           <List>
              <ListItem button key="Settings">
                 <ListItemIcon>
                   <SettingsIcon/>
                 </ListItemIcon>
                 <ListItemText primary="Settings"/>
               </ListItem>

               <ListItem button key="Language">
                <ListItemIcon>
                   <TranslateIcon/>
                 </ListItemIcon>
                 <ListItemText primary="Language"/>
                 <ArrowForwardIosIcon sx={{fontSize:15}}/>
               </ListItem>

              <ListItem button key="Location">
                <ListItemIcon>
                    <LanguageIcon/> 
                 </ListItemIcon>
                 <ListItemText primary="Location"/>
                 <ArrowForwardIosIcon sx={{fontSize:15}}/>
              </ListItem>

            <ListItem button key="Keyboard">
              <ListItemIcon>
                 <KeyboardOutlinedIcon/>
              </ListItemIcon>
               <ListItemText primary="Keyboard"/>
             </ListItem>

            <ListItem button key="Help">
              <ListItemIcon>
               <HelpOutlineOutlinedIcon/>
               </ListItemIcon>
               <ListItemText primary="Help"/>
             </ListItem>
           </List>
         </Drawer>
       </Box>
   );
   const mobileMenuId = "primary-search-account-menu-mobile";
   const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <VideoCallIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton size="large" color="inherit">
              <GridViewIcon />
            </IconButton>
         </MenuItem>
         <MenuItem>
           <IconButton size="large" color="inherit">
             <NotificationsNoneIcon />
           </IconButton>
          </MenuItem>
         <MenuItem>
         <IconButton sx={{ml:1}} >
          <img src={bird} alt="green bird" width="30" height="30" onClick={handleAccount}/>
          {accountbarOpen===true?AccountList():""}
          </IconButton>
         </MenuItem>
        </Menu>
      );
   
const passwordField=()=>(
        <FormControl sx={{ m: 1, width: '32ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handlePassword('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      )

const emailField=()=>(
  <TextField id="demo-helper-text-misaligned-no-helper"
   label="Email Id"
    type="email"
    value={values.email}
    onChange={handleEmail("email")}
    sx={{ m: 1, width: '32ch' }}
  />
  
    
 )

const preSignin=()=>(
    <Box sx={{ display: { xs: "none", md: "flex" } ,mr:2}}>
    <IconButton size="large" color="inherit" aria-label="moreIcon">
      <MoreIcon/>
    </IconButton>
    
    <Button variant="outlined" color="error" onClick={signIn}>
     Sign IN
    </Button> 
    <Modal
        open={modalOpen}
        onClose={()=>setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{textAlign:"center"}}>
            Google
          </Typography>
          <Box sx={{ml:2,mt:1}}>
            {emailField()}
            {passwordField()}
            
          </Box>
          <Box sx={{textAlign:"center",mt:1}}>
          <Button variant="contained" color="success" sx={{textAlign:"center"}}>
              Success
            </Button>
          </Box>

        </Box>
      </Modal>
    </Box>  
  );

  const afterSignin=()=>(
    <Box sx={{ display: { xs: "none", md: "flex" } ,mr:2}}>
          <IconButton size="large" color="inherit" aria-label="videoCall">
            <VideoCallIcon />
         </IconButton>
         <IconButton size="large" color="inherit" aria-label="gridView">
             <GridViewIcon />
         </IconButton>
         <IconButton
           size="large"
           edge="end"
           aria-label="notification"
           aria-haspopup="true"
           color="inherit"
              
            >
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton sx={{ml:1}} >
             <img src={bird} alt="greenBird" width="30" height="30" onClick={handleAccount}/>
                 {accountbarOpen===true?AccountList():""}
          </IconButton>
        </Box>

        

  )
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer anchor="left" open={leftbar} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <YouTubeIcon className="youtubeIcon" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            YouTube
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search YouTube"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="mic"
            sx={{ mr: 2 }}
          >
            <MicIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          {isSignin===true?afterSignin():preSignin()}
         {isSignin===false?"":(<Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>)}

        </Toolbar>
      </AppBar>
       {renderMobileMenu}
    </Box>
    
  );
}
